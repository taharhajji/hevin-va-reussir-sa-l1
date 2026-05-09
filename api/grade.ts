// Vercel Serverless Function — corrige une réponse rédigée via l'API Grok (xAI).
//
// Sécurité : la clé API est stockée dans la variable d'environnement
// `GROK_API_KEY` (jamais en dur dans le code, jamais commit dans git).
// À configurer dans Vercel : Settings → Environment Variables.
//
// Modèle utilisé : grok-2-latest (rapide et bon marché). Tu peux mettre
// grok-3-latest pour de meilleurs résultats.
//
// Body attendu (POST application/json) :
// {
//   "question": "...",        // sujet de la question
//   "userAnswer": "...",      // copie de l'étudiant
//   "modelAnswer": "...",     // réponse de référence (sert d'ancre, pas révélée)
//   "maxPoints": 4            // barème
// }
//
// Réponse :
// {
//   "score": 3.5,
//   "scoreOver": 4,
//   "grade": "B+",            // appréciation
//   "strengths": ["...", "..."],
//   "weaknesses": ["...", "..."],
//   "advice": "...",
//   "missingPoints": ["..."]  // notions oubliées
// }

import type { VercelRequest, VercelResponse } from "@vercel/node";

const GROK_ENDPOINT = "https://api.x.ai/v1/chat/completions";
const MODEL = process.env.GROK_MODEL || "grok-2-latest";

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

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "Clé API manquante. Ajoute GROK_API_KEY dans les variables d'environnement Vercel.",
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
    const response = await fetch(GROK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.3,
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
        error: `API Grok (${response.status}) : ${text.slice(0, 300)}`,
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
