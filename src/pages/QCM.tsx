import { Link } from "react-router-dom";
import { qcmByChapter } from "../data/qcm";

const colors = [
  "from-rose-400 to-orange-400",
  "from-blue-400 to-cyan-400",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-amber-400 to-yellow-500",
];

export default function QCM() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        🧠 QCM par chapitre
      </h1>
      <p className="text-slate-600 mb-8">
        Mode entraînement : tu cliques, tu vois immédiatement la bonne réponse et l'explication.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {qcmByChapter.map((q, i) => (
          <Link
            key={q.chapter}
            to={`/qcm/ch${q.chapter}`}
            className={`card-tilt block rounded-2xl p-6 text-white shadow-md bg-gradient-to-br ${colors[i]}`}
          >
            <div className="text-5xl">{q.emoji}</div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-90 mt-3">
              Chapitre {q.chapter}
            </p>
            <h2 className="font-display text-xl font-bold">{q.title}</h2>
            <p className="text-white/90 mt-1 text-sm">
              {q.questions.length} questions · feedback immédiat
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
