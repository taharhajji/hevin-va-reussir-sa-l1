import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLang } from "../i18n/context";

export default function Layout() {
  const loc = useLocation();
  const { lang, toggle, t } = useLang();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [loc.pathname]);

  const links = [
    { to: "/", label: t("navHome"), emoji: "🏠" },
    { to: "/chapitres", label: t("navChapters"), emoji: "📚" },
    { to: "/qcm", label: t("navQCM"), emoji: "🧠" },
    { to: "/examens", label: t("navExams"), emoji: "📝" },
    { to: "/exercices", label: t("navExercises"), emoji: "✍️" },
    { to: "/formules", label: t("navFormulas"), emoji: "📐" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
          <Link to="/" className="flex items-center gap-2 group">
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
                end={l.to === "/"}
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
