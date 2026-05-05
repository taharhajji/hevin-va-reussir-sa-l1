// Hooks that return the right data for the current subject + language combination.
import { chaptersByLang } from "./chapters";
import { chaptersGestion } from "./chapters.gestion";
import { chaptersGestionTr } from "./chapters.gestion.tr";
import { chaptersAnglais } from "./chapters.anglais";
import { chaptersDroit } from "./chapters.droit";
import { examsByLang } from "./exams";
import { examsGestion } from "./exams.gestion";
import { examsGestionTr } from "./exams.gestion.tr";
import { examsAnglais } from "./exams.anglais";
import { examsDroit } from "./exams.droit";
import { qcmByChapterByLang } from "./qcm";
import { qcmByChapterGestion } from "./qcm.gestion";
import { qcmByChapterGestionTr } from "./qcm.gestion.tr";
import { qcmByChapterAnglais } from "./qcm.anglais";
import { qcmByChapterDroit } from "./qcm.droit";
import { exerciseSectionsByLang } from "./exercises";
import { exerciseSectionsGestion } from "./exercises.gestion";
import { exerciseSectionsGestionTr } from "./exercises.gestion.tr";
import { exerciseSectionsGestionBonus } from "./exercises.gestion.bonus";
import { useLang } from "../i18n/context";
import { useSubject, type Subject } from "../subject/context";

const chaptersBySubject = {
  macro: chaptersByLang,
  gestion: { fr: chaptersGestion, tr: chaptersGestionTr },
  anglais: { fr: chaptersAnglais, tr: chaptersAnglais },
  // Droit : juste FR (cours en français, examen en français)
  droit: { fr: chaptersDroit, tr: chaptersDroit },
} as const;

const examsBySubject = {
  macro: examsByLang,
  gestion: { fr: examsGestion, tr: examsGestionTr },
  anglais: { fr: examsAnglais, tr: examsAnglais },
  droit: { fr: examsDroit, tr: examsDroit },
} as const;

const qcmBySubject = {
  macro: qcmByChapterByLang,
  gestion: { fr: qcmByChapterGestion, tr: qcmByChapterGestionTr },
  anglais: { fr: qcmByChapterAnglais, tr: qcmByChapterAnglais },
  droit: { fr: qcmByChapterDroit, tr: qcmByChapterDroit },
} as const;

const exercisesBySubject = {
  macro: exerciseSectionsByLang,
  gestion: {
    fr: [...exerciseSectionsGestion, ...exerciseSectionsGestionBonus],
    tr: exerciseSectionsGestionTr,
  },
  anglais: { fr: [], tr: [] },
  droit: { fr: [], tr: [] },
} as const;

function effectiveSubject(s: Subject | null): "macro" | "gestion" | "anglais" | "droit" {
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
