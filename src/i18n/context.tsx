import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ui } from "./strings";
import { playTransition } from "../components/TransitionVideo";

const FR_TO_TR_VIDEO = "/fr-to-tr.mp4";
const TR_TO_FR_VIDEO = "/tr-to-fr.mp4";

export type Lang = "fr" | "tr";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof ui) => string;
};

const Ctx = createContext<LangCtx | null>(null);
const STORAGE_KEY = "hevin-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "tr" || saved === "fr" ? saved : "fr";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  function setLang(l: Lang) {
    if (l !== lang) {
      if (lang === "fr" && l === "tr") playTransition(FR_TO_TR_VIDEO);
      else if (lang === "tr" && l === "fr") playTransition(TR_TO_FR_VIDEO);
    }
    setLangState(l);
  }
  function toggle() {
    const next = lang === "fr" ? "tr" : "fr";
    if (lang === "fr" && next === "tr") playTransition(FR_TO_TR_VIDEO);
    else if (lang === "tr" && next === "fr") playTransition(TR_TO_FR_VIDEO);
    setLangState(next);
  }
  function t(key: keyof typeof ui) {
    return ui[key]?.[lang] ?? ui[key]?.fr ?? String(key);
  }

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used inside <LangProvider>");
  return c;
}

// Helper to pick the right localized variant from a paired object.
export function pick<T>(value: { fr: T; tr: T }, lang: Lang): T {
  return value[lang];
}
