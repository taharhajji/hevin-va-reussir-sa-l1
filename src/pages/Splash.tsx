import { useNavigate } from "react-router-dom";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

export default function Splash() {
  const { lang, toggle, t } = useLang();
  const { setSubject } = useSubject();
  const nav = useNavigate();

  function pick(s: "macro" | "gestion") {
    setSubject(s);
    nav(`/${s}`, { replace: true });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-violet-50 flex flex-col">
      <header className="px-4 py-4 flex justify-end max-w-6xl mx-auto w-full">
        <button
          onClick={toggle}
          className="px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-sun-400 to-rose-400 text-slate-900 hover:from-sun-500 hover:to-rose-500 transition shadow-sm flex items-center gap-1.5"
        >
          <span aria-hidden>{lang === "fr" ? "🇹🇷" : "🇫🇷"}</span>
          <span>{t("langToggle")}</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-4xl w-full text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            {t("splashKicker")}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-slate-900 mb-3">
            {t("splashTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10">
            {t("splashSubtitle")}
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <button
              onClick={() => pick("macro")}
              className="card-tilt text-left rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-brand-500 via-brand-600 to-violet-600 text-white shadow-xl hover:shadow-2xl transition"
            >
              <div className="text-6xl mb-3">📊</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                {t("splashMacroTitle")}
              </h2>
              <p className="text-brand-50 mb-4">{t("splashMacroDesc")}</p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full font-semibold">
                {t("splashEnter")}
              </div>
            </button>

            <button
              onClick={() => pick("gestion")}
              className="card-tilt text-left rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-xl hover:shadow-2xl transition"
            >
              <div className="text-6xl mb-3">📦</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                {t("splashGestionTitle")}
              </h2>
              <p className="text-emerald-50 mb-3">{t("splashGestionDesc")}</p>
              <p className="text-xs text-emerald-50/90 mb-3">
                {t("splashGestionStatus")}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full font-semibold">
                {t("splashEnter")}
              </div>
            </button>
          </div>

          <p className="mt-8 text-sm text-slate-500">{t("splashHint")}</p>
        </div>
      </main>
    </div>
  );
}
