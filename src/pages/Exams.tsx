import { Link } from "react-router-dom";
import { useState } from "react";
import { useExams } from "../data/useSubjectData";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

const STORAGE_KEY = "hevin-shuffle";

export default function Exams() {
  const { t } = useLang();
  const { subject } = useSubject();
  const exams = useExams();
  const base = `/${subject ?? "macro"}`;
  const [shuffle, setShuffle] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "1";
  });

  function toggle() {
    const next = !shuffle;
    setShuffle(next);
    if (typeof window !== "undefined") {
      if (next) localStorage.setItem(STORAGE_KEY, "1");
      else localStorage.removeItem(STORAGE_KEY);
    }
  }

  const qSuffix = shuffle ? "?shuffle=1" : "";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        {t("examsTitle")}
      </h1>
      <p className="text-slate-600 mb-4">{t("examsIntro")}</p>

      <div className="mb-8 rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/40 p-4 flex flex-wrap items-center gap-3">
        <button
          onClick={toggle}
          aria-pressed={shuffle}
          className={`px-4 py-2 rounded-full font-semibold text-sm transition shadow-sm ${
            shuffle
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          {shuffle ? t("randomModeOn") : t("randomModeOff")}
        </button>
        {shuffle && (
          <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            ✓ {t("randomModeBadge")}
          </span>
        )}
        <p className="text-sm text-slate-600 flex-1 min-w-[200px]">
          {t("randomModeHint")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {exams.map((e, i) => (
          <Link
            key={e.slug}
            to={`${base}/examens/${e.slug}${qSuffix}`}
            className={`card-tilt block rounded-2xl p-6 text-white shadow-md ${
              i === 0
                ? "bg-gradient-to-br from-brand-500 to-violet-500"
                : "bg-gradient-to-br from-rose-500 to-orange-500"
            }`}
          >
            <div className="text-5xl">
              {e.emoji}
              {shuffle && " 🎲"}
            </div>
            <h2 className="font-display text-2xl font-bold mt-3">{e.title}</h2>
            <p className="text-white/90 mt-1">{e.subtitle}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("questionsLabel")}</p>
                <p className="font-bold text-base">{e.questions.length}</p>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("durationField")}</p>
                <p className="font-bold text-base">
                  {e.durationMin} {t("durationLabel")}
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-lg p-2">
                <p className="opacity-80">{t("passingScore")}</p>
                <p className="font-bold text-base">
                  ≥ {e.passingScore}/{e.questions.length}
                </p>
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
