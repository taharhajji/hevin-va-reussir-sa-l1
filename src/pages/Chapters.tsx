import { Link } from "react-router-dom";
import { chapters } from "../data/chapters";

export default function Chapters() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        📚 Le cours, en 5 chapitres
      </h1>
      <p className="text-slate-600 mb-8">
        Chaque chapitre se lit en 20 à 35 min, avec des explications simplifiées, des exemples
        concrets et les pièges classiques.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {chapters.map((c) => (
          <Link
            key={c.slug}
            to={`/chapitres/${c.slug}`}
            className={`card-tilt block rounded-2xl p-6 bg-gradient-to-br ${c.color} text-white shadow-md`}
          >
            <div className="flex items-center justify-between">
              <span className="text-5xl">{c.emoji}</span>
              <span className="bg-white/25 px-3 py-1 rounded-full text-xs font-semibold">
                CH {c.number}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold mt-3">{c.title}</h2>
            <p className="text-white/90 mt-2">{c.hook}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-white/80">
              <span>⏱️ {c.duration}</span>
              <span>📌 {c.sections.length} sections</span>
              <span>⚠️ {c.pieges.length} pièges</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
