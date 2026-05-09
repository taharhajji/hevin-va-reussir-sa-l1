// Vercel Serverless Function — corrige une réponse rédigée via OpenRouter
// (qui route vers Grok 3 sur l'infrastructure xAI).
//
// Sécurité : la clé API est stockée dans la variable d'environnement
// `OPENROUTER_API_KEY` (jamais en dur dans le code, jamais commit).
// À configurer dans Vercel : Settings → Environment Variables.
//
// Pourquoi OpenRouter plutôt que l'API xAI directe ? Pour éviter d'avoir à
// gérer le crédit / billing xAI séparément, et pour pouvoir basculer sur
// d'autres modèles (Claude, GPT-4, Llama…) en changeant juste GROK_MODEL.

import type { VercelRequest, VercelResponse } from "@vercel/node";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = process.env.GROK_MODEL || "x-ai/grok-3";

const SYSTEM_PROMPT = `Tu es un correcteur d'examen de droit niveau L2 LEA (étudiants non-juristes spécialisés). Tu corriges avec bienveillance mais rigueur, en restant accessible. La langue d'évaluation est le français.

Tu retournes EXCLUSIVEMENT un objet JSON valide (sans aucun texte autour, sans backticks markdown), conforme à ce schéma :
{
  "score": number,                  // note attribuée, en cohérence avec maxPoints
  "scoreOver": number,              // = maxPoints
  "grade": string,                  // appréciation courte ("A", "B+", "C", "Insuffisant", etc.)
  "strengths": string[],            // 1 à 3 points forts dans la copie
  "weaknesses": string[],           // 1 à 3 points faibles
  "missingPoints": string[],        // notions/définitions manquantes
  "advice": string                  // conseil méthodologique (≤ 80 mots)
}

Critères de notation :
- Connaissance du cours (définitions précises, citations correctes)
- Structure de la réponse
- Application au sujet (ne pas paraphraser)
- Pour la rédaction : utilisation de connecteurs, clarté

Sois indulgent : niveau LEA = pas un L2 droit. Une note correcte est entre 60% et 80% du barème pour un travail satisfaisant.`;

function buildUserPrompt(args: {
  question: string;
  userAnswer: string;
  modelAnswer: string;
  maxPoints: number;
}) {
  return `=== QUESTION ===
${args.question}

=== RÉPONSE MODÈLE (référence interne, ne PAS révéler à l'étudiant) ===
${args.modelAnswer}

=== COPIE DE L'ÉTUDIANT ===
${args.userAnswer}

=== BARÈME ===
${args.maxPoints} points

Évalue la copie de l'étudiant. Renvoie UNIQUEMENT le JSON conforme au schéma.`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // On accepte les 2 noms d'env var, OpenRouter en priorité.
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "Clé API manquante. Ajoute OPENROUTER_API_KEY dans les variables d'environnement Vercel.",
    });
  }

  const body = (req.body || {}) as Record<string, unknown>;
  const question = String(body.question ?? "").trim();
  const userAnswer = String(body.userAnswer ?? "").trim();
  const modelAnswer = String(body.modelAnswer ?? "").trim();
  const maxPoints = Number(body.maxPoints ?? 5);

  if (!question || !userAnswer || !modelAnswer) {
    return res.status(400).json({
      error: "Paramètres manquants (question, userAnswer, modelAnswer requis).",
    });
  }
  if (userAnswer.length < 10) {
    return res.status(400).json({
      error:
        "Réponse trop courte. Rédige au moins quelques phrases avant de soumettre.",
    });
  }

  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        // OpenRouter recommande ces headers pour le tracking et pour
        // apparaître dans le leaderboard public (optionnel).
        "HTTP-Referer": "https://macroeco-site.vercel.app",
        "X-Title": "Hevin va réussir sa L1",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.3,
        // Limite serrée pour rester dans le tier gratuit OpenRouter
        // (1599 tokens max par requête). Largement assez pour un JSON
        // de correction.
        max_tokens: 1500,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: buildUserPrompt({ question, userAnswer, modelAnswer, maxPoints }),
          },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(502).json({
        error: `API OpenRouter (${response.status}) : ${text.slice(0, 300)}`,
      });
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = data?.choices?.[0]?.message?.content ?? "";

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(content);
    } catch {
      return res.status(502).json({
        error: "Réponse de l'IA non parseable.",
        raw: content.slice(0, 500),
      });
    }

    return res.status(200).json(parsed);
  } catch (err: unknown) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "Erreur inconnue",
    });
  }
}
