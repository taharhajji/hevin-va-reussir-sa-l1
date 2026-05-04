import { Link } from "react-router-dom";
import { useState } from "react";
import { useQCMSets } from "../data/useSubjectData";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

const colors = [
  "from-rose-400 to-orange-400",
  "from-blue-400 to-cyan-400",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-amber-400 to-yellow-500",
  "from-cyan-400 to-blue-500",
  "from-yellow-400 to-amber-500",
];

const STORAGE_KEY = "hevin-shuffle";

export default function QCM() {
  const { t } = useLang();
  const { subject } = useSubject();
  const sets = useQCMSets();
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
        {t("qcmTitle")}
      </h1>
      <p className="text-slate-600 mb-4">{t("qcmIntro")}</p>

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sets.map((q, i) => (
          <Link
            key={q.chapter}
            to={`${base}/qcm/ch${q.chapter}${qSuffix}`}
            className={`card-tilt block rounded-2xl p-6 text-white shadow-md bg-gradient-to-br ${
              colors[i % colors.length]
            }`}
          >
            <div className="text-5xl">{q.emoji}</div>
            <p className="text-sm font-semibold uppercase tracking-wider opacity-90 mt-3">
              {t("chapterLabel")} {q.chapter}
            </p>
            <h2 className="font-display text-xl font-bold">{q.title}</h2>
            <p className="text-white/90 mt-1 text-sm">
              {q.questions.length} {t("qcmCardSubtitle")}
              {shuffle && " · 🎲"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
