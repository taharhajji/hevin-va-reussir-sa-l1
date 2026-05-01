import { Link } from "react-router-dom";
import { useLang } from "../i18n/context";
import Markdown from "../components/Markdown";

export default function GestionPlaceholder() {
  const { t } = useLang();
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white p-8 sm:p-12 shadow-xl">
        <div className="text-6xl mb-4">📦</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          {t("gestionPlaceholderTitle")}
        </h1>
        <div className="prose-ludic text-emerald-50">
          <Markdown>{t("gestionPlaceholderBody")}</Markdown>
        </div>
        <div className="mt-6">
          <Link
            to="/macro"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-5 py-2.5 rounded-full font-semibold transition"
          >
            {t("gestionBackToMacro")}
          </Link>
        </div>
      </div>
    </div>
  );
}
