import { Link } from "react-router-dom";
import { examsByLang } from "../data/exams";
import { useLang } from "../i18n/context";

export default function Exams() {
  const { lang, t } = useLang();
  const exams = examsByLang[lang];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        {t("examsTitle")}
      </h1>
      <p className="text-slate-600 mb-8">{t("examsIntro")}</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {exams.map((e, i) => (
          <Link
            key={e.slug}
            to={`/examens/${e.slug}`}
            className={`card-tilt block rounded-2xl p-6 text-white shadow-md ${
              i === 0
                ? "bg-gradient-to-br from-brand-500 to-violet-500"
                : "bg-gradient-to-br from-rose-500 to-orange-500"
            }`}
          >
            <div className="text-5xl">{e.emoji}</div>
            <h2 className="font-display text-2xl font-bold mt-3">{e.title}</h2>
            <p className="text-white/90 mt-1">{e.subtitle}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("questionsLabel")}</p>
                <p className="font-bold text-base">{e.questions.length}</p>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("durationField")}</p>
                <p className="font-bold text-base">{e.durationMin} {t("durationLabel")}</p>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("passingScore")}</p>
                <p className="font-bold text-base">≥ {e.passingScore}/40</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-sun-400/15 border border-sun-400/40 p-5 text-sm text-amber-900">
        <p>{t("examsAdvice")}</p>
      </div>
    </div>
  );
}
