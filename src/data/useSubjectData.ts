// Hooks that return the right data for the current subject + language combination.
import { chaptersByLang } from "./chapters";
import { chaptersGestion } from "./chapters.gestion";
import { chaptersGestionTr } from "./chapters.gestion.tr";
import { chaptersAnglais } from "./chapters.anglais";
import { examsByLang } from "./exams";
import { examsGestion } from "./exams.gestion";
import { examsGestionTr } from "./exams.gestion.tr";
import { examsAnglais } from "./exams.anglais";
import { qcmByChapterByLang } from "./qcm";
import { qcmByChapterGestion } from "./qcm.gestion";
import { qcmByChapterGestionTr } from "./qcm.gestion.tr";
import { qcmByChapterAnglais } from "./qcm.anglais";
import { exerciseSectionsByLang } from "./exercises";
import { exerciseSectionsGestion } from "./exercises.gestion";
import { exerciseSectionsGestionTr } from "./exercises.gestion.tr";
import { useLang } from "../i18n/context";
import { useSubject, type Subject } from "../subject/context";

const chaptersBySubject = {
  macro: chaptersByLang,
  gestion: { fr: chaptersGestion, tr: chaptersGestionTr },
  // Le cours d'anglais reste en anglais (langue d'examen) — on renvoie le
  // même contenu pour les deux clés. Les aides françaises sont déjà inline.
  anglais: { fr: chaptersAnglais, tr: chaptersAnglais },
} as const;

const examsBySubject = {
  macro: examsByLang,
  gestion: { fr: examsGestion, tr: examsGestionTr },
  anglais: { fr: examsAnglais, tr: examsAnglais },
} as const;

const qcmBySubject = {
  macro: qcmByChapterByLang,
  gestion: { fr: qcmByChapterGestion, tr: qcmByChapterGestionTr },
  anglais: { fr: qcmByChapterAnglais, tr: qcmByChapterAnglais },
} as const;

const exercisesBySubject = {
  macro: exerciseSectionsByLang,
  gestion: { fr: exerciseSectionsGestion, tr: exerciseSectionsGestionTr },
  // Pas d'exercices guidés pour anglais (cours QCM-only).
  anglais: { fr: [], tr: [] },
} as const;

function effectiveSubject(s: Subject | null): "macro" | "gestion" | "anglais" {
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
