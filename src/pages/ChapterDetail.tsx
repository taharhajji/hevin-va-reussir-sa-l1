import { Link, useParams, Navigate } from "react-router-dom";
import { chapters } from "../data/chapters";
import Markdown from "../components/Markdown";

export default function ChapterDetail() {
  const { slug } = useParams();
  const idx = chapters.findIndex((c) => c.slug === slug);
  if (idx === -1) return <Navigate to="/chapitres" replace />;
  const c = chapters[idx];
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className={`rounded-3xl bg-gradient-to-br ${c.color} text-white p-8 sm:p-10 shadow-xl`}>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-6xl">{c.emoji}</span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
              Chapitre {c.number} · {c.duration}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              {c.title}
            </h1>
          </div>
        </div>
        <div className="mt-5 text-white/95 prose-ludic">
          <Markdown>{c.intro}</Markdown>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {c.sections.map((s, i) => (
          <section
            key={i}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{s.emoji}</span>
              <h2 className="font-display text-2xl font-bold text-slate-900">{s.title}</h2>
            </div>
            <div className="prose-ludic text-slate-700">
              <Markdown>{s.body}</Markdown>
            </div>
          </section>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <section className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-6">
          <h2 className="font-display text-xl font-bold text-emerald-800 mb-3">
            ✅ À mémoriser
          </h2>
          <ul className="space-y-2 text-emerald-900">
            {c.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold">{i + 1}.</span>
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-6">
          <h2 className="font-display text-xl font-bold text-rose-800 mb-3">
            ⚠️ Pièges classiques
          </h2>
          <ul className="space-y-2 text-rose-900">
            {c.pieges.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span>⚠️</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-between">
        <div>
          {prev && (
            <Link
              to={`/chapitres/${prev.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              ← {prev.emoji} {prev.title}
            </Link>
          )}
        </div>
        <Link
          to={`/qcm/${c.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold"
        >
          🧠 QCM du chapitre {c.number}
        </Link>
        <div>
          {next && (
            <Link
              to={`/chapitres/${next.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              {next.emoji} {next.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
