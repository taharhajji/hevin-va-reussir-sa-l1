import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

export default function Layout() {
  const loc = useLocation();
  const nav = useNavigate();
  const { lang, toggle, t } = useLang();
  const { subject, clear } = useSubject();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [loc.pathname]);

  const base = subject ? `/${subject}` : "/macro";
  const links = [
    { to: `${base}`, label: t("navHome"), emoji: "🏠", end: true },
    { to: `${base}/chapitres`, label: t("navChapters"), emoji: "📚" },
    { to: `${base}/qcm`, label: t("navQCM"), emoji: "🧠" },
    { to: `${base}/examens`, label: t("navExams"), emoji: "📝" },
    { to: `${base}/exercices`, label: t("navExercises"), emoji: "✍️" },
    { to: `${base}/formules`, label: t("navFormulas"), emoji: "📐" },
  ];

  function changeSubject() {
    clear();
    nav("/", { replace: false });
  }

  const subjectBadge = subject === "gestion" ? t("subjectGestion") : t("subjectMacro");
  const subjectColor =
    subject === "gestion"
      ? "bg-emerald-100 text-emerald-800"
      : "bg-brand-100 text-brand-800";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 flex-wrap text-xs">
          <button
            onClick={changeSubject}
            className="text-slate-500 hover:text-slate-900 transition"
            title={t("changeSubject")}
          >
            {t("changeSubject")}
          </button>
          <span
            className={`ml-1 px-2 py-0.5 rounded-full font-semibold ${subjectColor}`}
          >
            {subject === "gestion" ? "📦" : "📊"} {subjectBadge}
          </span>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-3 flex items-center gap-4 flex-wrap">
          <Link to={base} className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-wiggle">🚀</span>
            <span className="font-display font-bold text-lg text-slate-900 leading-tight">
              {t("brand")}
            </span>
          </Link>
          <nav className="flex flex-wrap gap-1 ml-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-brand-600 text-white shadow"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <span className="mr-1">{l.emoji}</span>
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={toggle}
              aria-label={t("langToggleAria")}
              className="ml-1 px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-sun-400 to-rose-400 text-slate-900 hover:from-sun-500 hover:to-rose-500 transition shadow-sm flex items-center gap-1.5"
              title={t("langToggleAria")}
            >
              <span aria-hidden>{lang === "fr" ? "🇹🇷" : "🇫🇷"}</span>
              <span>{t("langToggle")}</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-6 text-center text-sm text-slate-500">
        <p>{t("footer")}</p>
      </footer>
    </div>
  );
}
