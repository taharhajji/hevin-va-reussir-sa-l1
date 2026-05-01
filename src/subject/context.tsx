import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Subject = "macro" | "gestion";

type Ctx = {
  subject: Subject | null; // null = pas encore choisi
  setSubject: (s: Subject) => void;
  clear: () => void;
};

const SubjectCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "hevin-subject";

export function SubjectProvider({ children }: { children: ReactNode }) {
  const [subject, setSubjectState] = useState<Subject | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "macro" || saved === "gestion" ? saved : null;
  });

  useEffect(() => {
    if (subject) localStorage.setItem(STORAGE_KEY, subject);
    else localStorage.removeItem(STORAGE_KEY);
  }, [subject]);

  return (
    <SubjectCtx.Provider
      value={{
        subject,
        setSubject: (s) => setSubjectState(s),
        clear: () => setSubjectState(null),
      }}
    >
      {children}
    </SubjectCtx.Provider>
  );
}

export function useSubject() {
  const c = useContext(SubjectCtx);
  if (!c) throw new Error("useSubject must be used inside <SubjectProvider>");
  return c;
}
