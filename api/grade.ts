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
// Modèle gratuit par défaut (compatible OpenRouter free tier).
// Override possible via la variable d'env GROK_MODEL.
const MODEL = process.env.GROK_MODEL || "openai/gpt-oss-120b:free";

const SYSTEM_PROMPT = `Tu es un correcteur BIENVEILLANT d'examen de droit pour des étudiants en L2 LEA (Langues Étrangères Appliquées) — ce sont des étudiants NON-JURISTES, le niveau attendu est BASIQUE, pas celui d'un étudiant en faculté de droit.

GRILLE DE NOTATION OBLIGATOIRE (sois indulgent, l'objectif est d'encourager) :
- 0% : copie blanche ou totalement hors-sujet.
- 25-40% : copie qui contient quelques mots-clés mais sans compréhension.
- 50-65% : copie qui mentionne LE concept clé OU LE bon auteur, même de façon maladroite ou très brève. C'est la note plancher dès qu'il y a une trace de connaissance.
- 65-80% : copie correcte qui définit le concept clé avec quelques mots de contexte. C'est la note CIBLE pour un travail honnête niveau LEA.
- 80-95% : copie complète, structurée, avec exemples ou contexte historique.
- 95-100% : très rare, copie excellente avec citations précises et nuances.

⚠️ IMPÉRATIF : si la copie cite l'auteur ET le concept clé (même mal formulé), tu donnes AU MINIMUM 50% du barème. Ne pas pénaliser les fautes d'orthographe ou la formulation orale (ex : "c est la" au lieu de "c'est la").

Tu retournes EXCLUSIVEMENT un objet JSON valide (sans aucun texte autour, sans backticks markdown), conforme à ce schéma :
{
  "score": number,                  // note attribuée (peut être décimale, ex 2.5)
  "scoreOver": number,              // = maxPoints fourni
  "grade": string,                  // appréciation : "A+", "A", "B+", "B", "C", "Insuffisant"
  "strengths": string[],            // 1 à 3 points forts (toujours en trouver au moins 1 si la copie n'est pas blanche)
  "weaknesses": string[],           // 1 à 3 points faibles
  "missingPoints": string[],        // 1 à 3 notions/définitions à ajouter
  "advice": string                  // conseil méthodologique chaleureux et concret (≤ 80 mots)
}

Toujours en français. Toujours encourageant. Tu t'adresses à l'étudiant.`;

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
        temperature: 0.4,
        max_tokens: 800,
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
