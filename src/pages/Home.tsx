import { Link } from "react-router-dom";
import { useChapters, useExams } from "../data/useSubjectData";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";
import Markdown from "../components/Markdown";

export default function Home() {
  const { t } = useLang();
  const { subject } = useSubject();
  const chapters = useChapters();
  const exams = useExams();
  const base = `/${subject ?? "macro"}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-violet-500 p-8 sm:p-12 text-white shadow-xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-100 mb-2">
          {t("homeKicker")}
        </p>
        <h1 className="font-display text-4xl sm:text-6xl font-black leading-tight mb-4">
          {t("homeTitle1")} <span className="text-sun-400">{t("homeTitle2")}</span> 🚀
        </h1>
        <p className="text-lg sm:text-xl text-brand-50 max-w-2xl mb-6">
          {t("homeIntro")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to={`${base}/chapitres`}
            className="bg-white text-brand-700 px-5 py-2.5 rounded-full font-semibold hover:bg-sun-400 hover:text-slate-900 transition shadow"
          >
            {t("ctaStartCourse")}
          </Link>
          <Link
            to={`${base}/examens`}
            className="bg-brand-800/40 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-900/60 transition border border-white/20"
          >
            {t("ctaTryExam")}
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          {t("fiveChapters")}
        </h2>
        <p className="text-slate-600 mb-6">{t("fiveChaptersHook")}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((c) => (
            <Link
              key={c.slug}
              to={`${base}/chapitres/${c.slug}`}
              className={`card-tilt block rounded-2xl p-6 bg-gradient-to-br ${c.color} text-white shadow-md`}
            >
              <div className="text-4xl mb-2">{c.emoji}</div>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                {t("chapterLabel")} {c.number}
              </p>
              <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-white/90 text-sm">{c.hook}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-white/80">
                <span>⏱️ {c.duration}</span>
                <span>📌 {c.keyPoints.length} {t("keyPointsCount")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-5">
        <Link
          to={`${base}/qcm`}
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">🧠</div>
          <h3 className="font-display text-xl font-bold text-slate-900">{t("navQCM")}</h3>
          <p className="text-slate-600 mt-1">{t("qcmCardDesc")}</p>
        </Link>
        <Link
          to={`${base}/examens`}
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">📝</div>
          <h3 className="font-display text-xl font-bold text-slate-900">{t("navExams")}</h3>
          <p className="text-slate-600 mt-1">
            <strong>{exams.length}</strong> {t("examsCardDesc")}
          </p>
        </Link>
        <Link
          to={`${base}/exercices`}
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">✍️</div>
          <h3 className="font-display text-xl font-bold text-slate-900">{t("navExercises")}</h3>
          <p className="text-slate-600 mt-1">{t("exercisesCardDesc")}</p>
        </Link>
        <Link
          to={`${base}/formules`}
          className="card-tilt block rounded-2xl p-6 bg-white border-2 border-slate-200 hover:border-brand-400"
        >
          <div className="text-4xl mb-2">📐</div>
          <h3 className="font-display text-xl font-bold text-slate-900">{t("navFormulas")}</h3>
          <p className="text-slate-600 mt-1">{t("formulasCardDesc")}</p>
        </Link>
      </section>

      <section className="mt-12 rounded-2xl bg-white border-2 border-dashed border-brand-300 p-6">
        <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
          {t("expressPlanTitle")}
        </h2>
        <ol className="grid sm:grid-cols-2 gap-3 text-sm">
          {[t("expressJ7"), t("expressJ5"), t("expressJ3"), t("expressJ1")].map((s, i) => (
            <li key={i} className="bg-brand-50 rounded-xl p-3 prose-ludic">
              <Markdown>{s}</Markdown>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
