import { useState, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { writtenExamsDroit, type WrittenQuestion } from "../data/writtenExams.droit";
import { useSubject } from "../subject/context";

type Feedback = {
  score: number;
  scoreOver: number;
  grade?: string;
  strengths?: string[];
  weaknesses?: string[];
  missingPoints?: string[];
  advice?: string;
};

type QState = {
  loading: boolean;
  error?: string;
  feedback?: Feedback;
};

export default function WrittenExamRunner() {
  const { slug } = useParams();
  const { subject } = useSubject();
  const base = `/${subject ?? "droit"}`;
  const exam = writtenExamsDroit.find((e) => e.slug === slug);
  if (!exam) return <Navigate to={`${base}/examens`} replace />;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [states, setStates] = useState<Record<number, QState>>({});

  const totalScore = useMemo(() => {
    let s = 0;
    for (const q of exam.questions) {
      const f = states[q.id]?.feedback;
      if (f) s += Math.max(0, Math.min(f.scoreOver, f.score));
    }
    return s;
  }, [states, exam.questions]);
  const totalMax = exam.questions.reduce((sum, q) => sum + q.maxPoints, 0);
  const allGraded = exam.questions.every((q) => states[q.id]?.feedback);

  async function gradeOne(q: WrittenQuestion) {
    const userAnswer = (answers[q.id] ?? "").trim();
    if (userAnswer.length < 10) {
      setStates((s) => ({
        ...s,
        [q.id]: { loading: false, error: "Rédige au moins quelques phrases." },
      }));
      return;
    }
    setStates((s) => ({ ...s, [q.id]: { loading: true } }));
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.prompt,
          userAnswer,
          modelAnswer: q.modelAnswer,
          maxPoints: q.maxPoints,
        }),
      });
      const data = (await res.json()) as Record<string, unknown>;
      if (!res.ok) {
        setStates((s) => ({
          ...s,
          [q.id]: {
            loading: false,
            error: typeof data.error === "string" ? data.error : "Erreur inconnue",
          },
        }));
        return;
      }
      setStates((s) => ({
        ...s,
        [q.id]: { loading: false, feedback: data as Feedback },
      }));
    } catch (err) {
      setStates((s) => ({
        ...s,
        [q.id]: {
          loading: false,
          error: err instanceof Error ? err.message : "Erreur réseau",
        },
      }));
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white p-8 sm:p-10 shadow-xl">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-5xl">{exam.emoji}</span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
              Examen blanc — Rédaction
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              {exam.title}
            </h1>
          </div>
        </div>
        <p className="mt-3 text-amber-50">{exam.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <span className="bg-white/15 backdrop-blur rounded-full px-3 py-1">
            ⏱️ {exam.durationMin} min
          </span>
          <span className="bg-white/15 backdrop-blur rounded-full px-3 py-1">
            📝 {exam.questions.length} questions
          </span>
          <span className="bg-white/15 backdrop-blur rounded-full px-3 py-1">
            🎯 Barème : {totalMax} points
          </span>
          <span className="bg-white/15 backdrop-blur rounded-full px-3 py-1">
            🤖 Correction IA Grok
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900">
        <strong>📋 Comment ça marche :</strong> rédige ta réponse à chaque
        question, puis clique sur <em>« Soumettre pour correction IA »</em>. Tu
        reçois en quelques secondes : note, points forts, points faibles,
        notions oubliées, conseil méthodologique. Tu peux corriger ta réponse
        et resoumettre autant de fois que tu veux.
      </div>

      <div className="mt-8 space-y-8">
        {exam.questions.map((q, idx) => {
          const st = states[q.id] || { loading: false };
          return (
            <article
              key={q.id}
              className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <h2 className="font-display text-lg font-bold text-slate-900">
                  Question {idx + 1}
                </h2>
                <span className="text-xs text-slate-500 ml-auto">
                  {q.maxPoints} pts
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">{q.prompt}</p>
              {q.hint && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                  💡 {q.hint}
                </p>
              )}
              {q.expected && (
                <p className="text-xs text-slate-500 mb-2">{q.expected}</p>
              )}

              <textarea
                value={answers[q.id] ?? ""}
                onChange={(e) =>
                  setAnswers((a) => ({ ...a, [q.id]: e.target.value }))
                }
                disabled={st.loading}
                rows={8}
                placeholder="Rédige ta réponse ici…"
                className="w-full rounded-xl border-2 border-slate-200 focus:border-amber-400 outline-none p-3 text-sm font-sans"
              />

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => gradeOne(q)}
                  disabled={st.loading}
                  className="bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white px-4 py-2 rounded-full font-semibold text-sm transition shadow-sm"
                >
                  {st.loading
                    ? "🤖 Correction en cours…"
                    : st.feedback
                    ? "🔁 Corriger à nouveau"
                    : "✅ Soumettre pour correction IA"}
                </button>
                <span className="text-xs text-slate-500">
                  {(answers[q.id] ?? "").trim().split(/\s+/).filter(Boolean).length}{" "}
                  mots
                </span>
              </div>

              {st.error && (
                <div className="mt-3 rounded-xl bg-rose-50 border border-rose-200 p-3 text-sm text-rose-800">
                  ⚠️ {st.error}
                </div>
              )}

              {st.feedback && (
                <FeedbackCard fb={st.feedback} />
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 shadow-lg">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider opacity-80">
              Score global
            </p>
            <p className="font-display text-4xl font-black">
              {totalScore.toFixed(1)} / {totalMax}
            </p>
            <p className="text-sm opacity-90 mt-1">
              ≈ {((totalScore / totalMax) * 20).toFixed(1)} / 20
            </p>
          </div>
          {allGraded ? (
            <p className="text-emerald-50 max-w-md text-sm">
              🎉 Toutes tes réponses ont été corrigées. Relis les retours pour
              améliorer tes prochaines copies.
            </p>
          ) : (
            <p className="text-emerald-50 max-w-md text-sm">
              💡 Le score se met à jour à mesure que tu fais corriger chaque
              question.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Link
          to={`${base}/examens`}
          className="text-slate-600 hover:text-slate-900 underline"
        >
          ← Retour aux examens
        </Link>
      </div>
    </div>
  );
}

function FeedbackCard({ fb }: { fb: Feedback }) {
  const ratio = fb.scoreOver > 0 ? fb.score / fb.scoreOver : 0;
  const color =
    ratio >= 0.75
      ? "from-emerald-500 to-teal-600"
      : ratio >= 0.5
      ? "from-amber-500 to-orange-500"
      : "from-rose-500 to-pink-600";
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
      <div
        className={`bg-gradient-to-r ${color} text-white px-4 py-3 flex items-baseline justify-between`}
      >
        <div>
          <p className="text-xs uppercase tracking-wider opacity-90">
            Correction IA
          </p>
          <p className="font-display font-bold text-2xl">
            {fb.score.toFixed(1)} / {fb.scoreOver}
          </p>
        </div>
        {fb.grade && (
          <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 font-bold">
            {fb.grade}
          </span>
        )}
      </div>
      <div className="bg-white p-4 space-y-3">
        {fb.strengths && fb.strengths.length > 0 && (
          <div>
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              ✅ Points forts
            </p>
            <ul className="mt-1 space-y-1 text-sm text-slate-700">
              {fb.strengths.map((s, i) => (
                <li key={i}>· {s}</li>
              ))}
            </ul>
          </div>
        )}
        {fb.weaknesses && fb.weaknesses.length > 0 && (
          <div>
            <p className="text-xs font-bold text-rose-700 uppercase tracking-wider">
              ⚠️ Points faibles
            </p>
            <ul className="mt-1 space-y-1 text-sm text-slate-700">
              {fb.weaknesses.map((s, i) => (
                <li key={i}>· {s}</li>
              ))}
            </ul>
          </div>
        )}
        {fb.missingPoints && fb.missingPoints.length > 0 && (
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              📌 Notions oubliées
            </p>
            <ul className="mt-1 space-y-1 text-sm text-slate-700">
              {fb.missingPoints.map((s, i) => (
                <li key={i}>· {s}</li>
              ))}
            </ul>
          </div>
        )}
        {fb.advice && (
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-3">
            <p className="text-xs font-bold text-brand-700 uppercase tracking-wider">
              💡 Conseil méthodologique
            </p>
            <p className="text-sm text-slate-700 mt-1">{fb.advice}</p>
          </div>
        )}
      </div>
    </div>
  );
}
