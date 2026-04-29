import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const links = [
  { to: "/", label: "Accueil", emoji: "🏠" },
  { to: "/chapitres", label: "Cours", emoji: "📚" },
  { to: "/qcm", label: "QCM par chapitre", emoji: "🧠" },
  { to: "/examens", label: "Examens blancs", emoji: "📝" },
  { to: "/exercices", label: "Exercices", emoji: "✍️" },
  { to: "/formules", label: "Formulaire", emoji: "📐" },
];

export default function Layout() {
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [loc.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-wiggle">🚀</span>
            <span className="font-display font-bold text-lg text-slate-900 leading-tight">
              Hevin va réussir <span className="text-brand-600">sa L1</span>
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
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-6 text-center text-sm text-slate-500">
        <p>
          Fait avec 💙 pour Hevin — révise, transpire un peu, et cartonne. ·
          <span className="ml-2">Macroéconomie L1 LEA · AMU</span>
        </p>
      </footer>
    </div>
  );
}
