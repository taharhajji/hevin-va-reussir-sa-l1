import { Link } from "react-router-dom";
import { chaptersByLang } from "../data/chapters";
import { useLang } from "../i18n/context";

export default function Chapters() {
  const { lang, t } = useLang();
  const chapters = chaptersByLang[lang];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        {t("chaptersTitle")}
      </h1>
      <p className="text-slate-600 mb-8">{t("chaptersIntro")}</p>

      <div className="grid md:grid-cols-2 gap-5">
        {chapters.map((c) => (
          <Link
            key={c.slug}
            to={`/chapitres/${c.slug}`}
            className={`card-tilt block rounded-2xl p-6 bg-gradient-to-br ${c.color} text-white shadow-md`}
          >
            <div className="flex items-center justify-between">
              <span className="text-5xl">{c.emoji}</span>
              <span className="bg-white/25 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                {t("chapterLabel")} {c.number}
              </span>
            </div>
            <h2 className="font-display text-2xl font-bold mt-3">{c.title}</h2>
            <p className="text-white/90 mt-2">{c.hook}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-white/80">
              <span>⏱️ {c.duration}</span>
              <span>📌 {c.sections.length} {t("sectionsLabel")}</span>
              <span>⚠️ {c.pieges.length} {t("trapsLabel")}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
