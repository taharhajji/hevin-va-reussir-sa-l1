// Hooks that return the right data for the current subject + language combination.
import { chaptersByLang } from "./chapters";
import { chaptersGestion } from "./chapters.gestion";
import { chaptersGestionTr } from "./chapters.gestion.tr";
import { examsByLang } from "./exams";
import { examsGestion } from "./exams.gestion";
import { examsGestionTr } from "./exams.gestion.tr";
import { qcmByChapterByLang } from "./qcm";
import { qcmByChapterGestion } from "./qcm.gestion";
import { qcmByChapterGestionTr } from "./qcm.gestion.tr";
import { exerciseSectionsByLang } from "./exercises";
import { exerciseSectionsGestion } from "./exercises.gestion";
import { exerciseSectionsGestionTr } from "./exercises.gestion.tr";
import { useLang } from "../i18n/context";
import { useSubject, type Subject } from "../subject/context";

const chaptersBySubject = {
  macro: chaptersByLang,
  gestion: { fr: chaptersGestion, tr: chaptersGestionTr },
} as const;

const examsBySubject = {
  macro: examsByLang,
  gestion: { fr: examsGestion, tr: examsGestionTr },
} as const;

const qcmBySubject = {
  macro: qcmByChapterByLang,
  gestion: { fr: qcmByChapterGestion, tr: qcmByChapterGestionTr },
} as const;

const exercisesBySubject = {
  macro: exerciseSectionsByLang,
  gestion: { fr: exerciseSectionsGestion, tr: exerciseSectionsGestionTr },
} as const;

function effectiveSubject(s: Subject | null): "macro" | "gestion" {
  return s ?? "macro";
}

export function useChapters() {
  const { lang } = useLang();
  const { subject } = useSubject();
  return chaptersBySubject[effectiveSubject(subject)][lang];
}

export function useExams() {
  const { lang } = useLang();
  const { subject } = useSubject();
  return examsBySubject[effectiveSubject(subject)][lang];
}

export function useQCMSets() {
  const { lang } = useLang();
  const { subject } = useSubject();
  return qcmBySubject[effectiveSubject(subject)][lang];
}

export function useExerciseSections() {
  const { lang } = useLang();
  const { subject } = useSubject();
  return exercisesBySubject[effectiveSubject(subject)][lang];
}
