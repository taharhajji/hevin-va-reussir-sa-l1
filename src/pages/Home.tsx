import { Link } from "react-router-dom";
import { chapters } from "../data/chapters";
import { exams } from "../data/exams";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-violet-500 p-8 sm:p-12 text-white shadow-xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-100 mb-2">
          Macroéconomie · L1 LEA · AMU
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-black leading-tight mb-4">
          Hevin va réussir <span className="text-sun-400">sa L1</span> 🚀
        </h1>
        <p className="text-lg sm:text-xl text-brand-50 max-w-2xl mb-6">
          Le cours de macro, simplifié et ludique. <strong>5 chapitres</strong>, des QCM par chapitre,
          des examens blancs interactifs notés automatiquement, et un formulaire à dégainer en exam.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/chapitres"
            className="bg-white text-brand-700 px-5 py-2.5 rounded-full font-semibold hover:bg-sun-400 hover:text-slate-900 transition shadow"
          >
            📚 Commencer le cours
          </Link>
          <Link
            to="/examens"
            className="bg-brand-800/40 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-900/60 transition border border-white/20"
          >
            📝 Tenter un examen blanc
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Les 5 chapitres 🧭
        </h2>
        <p className="text-slate-600 mb-6">
          Cours simplifiés, mémo-techniques et pièges classiques.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              to={`/chapitres/${c.slug}`}
              className={`card-tilt block rounded-2xl p-6 bg-gradient-to-br ${c.color} text-white shadow-md`}
            >
              <div className="text-4xl mb-2">{c.emoji}</div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                Chapitre {c.number}
              </p>
              <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-white/90 text-sm">{c.hook}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/80">
                <span>⏱️ {c.duration}</span>
                <span>📌 {c.keyPoints.length} points clés</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-5">
        <Link
          to="/qcm"
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">🧠</div>
          <h3 className="font-display text-xl font-bold text-slate-900">QCM par chapitre</h3>
          <p className="text-slate-600 mt-1">
            50 questions classées par chapitre, avec correction et explication immédiate.
          </p>
        </Link>
        <Link
          to="/examens"
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">📝</div>
          <h3 className="font-display text-xl font-bold text-slate-900">Examens blancs</h3>
          <p className="text-slate-600 mt-1">
            <strong>{exams.length} examens</strong> de 40 QCM en conditions réelles, notation finale auto.
          </p>
        </Link>
        <Link
          to="/exercices"
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">✍️</div>
          <h3 className="font-display text-xl font-bold text-slate-900">Exercices guidés</h3>
          <p className="text-slate-600 mt-1">
            VA, équilibre R-E, multiplicateur, déflater le PIB — méthode pas à pas.
          </p>
        </Link>
        <Link
          to="/formules"
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">📐</div>
          <h3 className="font-display text-xl font-bold text-slate-900">Formulaire & mnémo</h3>
          <p className="text-slate-600 mt-1">
            Toutes les formules au même endroit + acronymes (DEMIDE, CDIM, SDR, GNEE…).
          </p>
        </Link>
      </section>

      <section className="mt-12 rounded-2xl bg-white border-2 border-dashed border-brand-300 p-6">
        <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
          Plan de révision express ⚡
        </h2>
        <ol className="grid sm:grid-cols-2 gap-3 text-sm">
          <li className="bg-brand-50 rounded-xl p-3">
            <strong>J-7 :</strong> lire les 5 chapitres (cours simplifié).
          </li>
          <li className="bg-brand-50 rounded-xl p-3">
            <strong>J-5 :</strong> faire les QCM par chapitre (correction immédiate).
          </li>
          <li className="bg-brand-50 rounded-xl p-3">
            <strong>J-3 :</strong> examen blanc n°1 chronométré (2h sans aide).
          </li>
          <li className="bg-brand-50 rounded-xl p-3">
            <strong>J-1 :</strong> examen blanc n°2 + relire les pièges classiques.
          </li>
        </ol>
      </section>
    </div>
  );
}
