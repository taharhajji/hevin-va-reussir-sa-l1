import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ui } from "./strings";

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
    setLangState(l);
  }
  function toggle() {
    setLangState((l) => (l === "fr" ? "tr" : "fr"));
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
