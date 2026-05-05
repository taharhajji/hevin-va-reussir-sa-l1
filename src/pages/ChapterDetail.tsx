import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { useChapters } from "../data/useSubjectData";
import Markdown from "../components/Markdown";
import VideoOverlay from "../components/VideoOverlay";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";
import type { ChapterVideo } from "../data/chapters";

export default function ChapterDetail() {
  const { slug } = useParams();
  const { t } = useLang();
  const { subject } = useSubject();
  const chapters = useChapters();
  const base = `/${subject ?? "macro"}`;
  const [openVideo, setOpenVideo] = useState<ChapterVideo | null>(null);
  const idx = chapters.findIndex((c) => c.slug === slug);
  if (idx === -1) return <Navigate to={`${base}/chapitres`} replace />;
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
              {t("chapterLabel")} {c.number} · {c.duration}
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

      {c.videos && c.videos.length > 0 && (
        <section className="mt-8 rounded-2xl bg-white border-2 border-slate-200 p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
            {t("videosTitle")}
          </h2>
          <p className="text-sm text-slate-600 mb-4">{t("videosIntro")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.videos.map((v) => (
              <button
                key={v.youtubeId}
                onClick={() => setOpenVideo(v)}
                className="group text-left rounded-xl border border-slate-200 hover:border-brand-400 overflow-hidden transition shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition">
                    <div className="bg-white/95 rounded-full w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <span className="text-3xl pl-1">▶</span>
                    </div>
                  </div>
                  {v.duration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                      {v.duration}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-slate-900 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                    {v.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <section className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-6">
          <h2 className="font-display text-xl font-bold text-emerald-800 mb-3">
            {t("toMemorize")}
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
            {t("classicTraps")}
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
              to={`${base}/chapitres/${prev.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              ← {prev.emoji} {prev.title}
            </Link>
          )}
        </div>
        <Link
          to={`${base}/qcm/${c.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold"
        >
          {t("chapterQCMCta")} {c.number}
        </Link>
        <div>
          {next && (
            <Link
              to={`${base}/chapitres/${next.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700"
            >
              {next.emoji} {next.title} →
            </Link>
          )}
        </div>
      </div>

      {openVideo && (
        <VideoOverlay
          youtubeId={openVideo.youtubeId}
          title={openVideo.title}
          author={openVideo.author}
          onClose={() => setOpenVideo(null)}
        />
      )}
    </div>
  );
}
