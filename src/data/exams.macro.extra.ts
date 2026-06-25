// Examens blancs supplémentaires pour la MACROÉCONOMIE, composés à partir de la
// banque de QCM bilingue (qcmByChapter fr / qcmByChapterTr tr). Objectif :
// couvrir TOUT le cours, chapitre par chapitre + révisions cumulatives.
import type { Exam, Question } from "./exams";
import type { QCMChapter } from "./qcm";
import { qcmByChapter } from "./qcm";
import { qcmByChapterTr } from "./qcm.tr";

type L = "fr" | "tr";

const flat = (bank: QCMChapter[]): Question[] => bank.flatMap((c) => c.questions);
const reId = (qs: Question[], base: number): Question[] =>
  qs.map((q, i) => ({ ...q, id: base + i }));
const pass = (n: number) => Math.max(1, Math.ceil(n * 0.6));

function buildExtraExams(bank: QCMChapter[], lang: L): Exam[] {
  const isFr = lang === "fr";
  const all = flat(bank);
  const exams: Exam[] = [];

  // 1) Un examen par chapitre — pour driller chaque partie du cours
  bank.forEach((set, idx) => {
    const qs = set.questions;
    exams.push({
      slug: `examen-ch${set.chapter}`,
      title: isFr ? `Examen — ${set.title}` : `Sınav — ${set.title}`,
      subtitle: isFr
        ? `${qs.length} questions · réviser à fond le chapitre ${set.chapter}`
        : `${qs.length} soru · bölüm ${set.chapter}'i iyice tekrar et`,
      emoji: set.emoji,
      durationMin: 20,
      passingScore: pass(qs.length),
      questions: reId(qs, 30000 + idx * 100),
    });
  });

  // 2) Macro réelle (Ch 1-2-3)
  const reelle = all.filter((q) => q.chapter <= 3);
  exams.push({
    slug: "examen-macro-reelle",
    title: isFr ? "Examen — Macro réelle (Ch 1-2-3)" : "Sınav — Reel makro (Bölüm 1-2-3)",
    subtitle: isFr
      ? `${reelle.length} questions · PIB, comptabilité nationale, conso & multiplicateur`
      : `${reelle.length} soru · GSYH, ulusal muhasebe, tüketim & çarpan`,
    emoji: "📊",
    durationMin: 45,
    passingScore: pass(reelle.length),
    questions: reId(reelle, 30600),
  });

  // 3) Monnaie & financement (Ch 4-5)
  const mon = all.filter((q) => q.chapter >= 4);
  exams.push({
    slug: "examen-monnaie-financement",
    title: isFr ? "Examen — Monnaie & financement (Ch 4-5)" : "Sınav — Para & finansman (Bölüm 4-5)",
    subtitle: isFr
      ? `${mon.length} questions · financement, monnaie, banques centrales`
      : `${mon.length} soru · finansman, para, merkez bankaları`,
    emoji: "🏦",
    durationMin: 35,
    passingScore: pass(mon.length),
    questions: reId(mon, 30800),
  });

  // 4) Spécial calculs (toutes les questions de type "exercice")
  const calc = all.filter((q) => q.category === "exercice");
  if (calc.length > 0) {
    exams.push({
      slug: "examen-calculs",
      title: isFr ? "Examen — Spécial calculs" : "Sınav — Hesaplamalar",
      subtitle: isFr
        ? `${calc.length} questions · VA, multiplicateur, déflater le PIB…`
        : `${calc.length} soru · katma değer, çarpan, GSYH deflatörü…`,
      emoji: "🧮",
      durationMin: 25,
      passingScore: pass(calc.length),
      questions: reId(calc, 31000),
    });
  }

  // 5) Blitz express — 3 questions par chapitre
  const blitz = bank.flatMap((set) => set.questions.slice(0, 3)).slice(0, 15);
  exams.push({
    slug: "examen-blitz",
    title: isFr ? "Examen Blitz express" : "Blitz sınavı",
    subtitle: isFr
      ? `${blitz.length} questions · 15 min · révision de dernière minute`
      : `${blitz.length} soru · 15 dk · son dakika tekrarı`,
    emoji: "⚡",
    durationMin: 15,
    passingScore: pass(blitz.length),
    questions: reId(blitz, 31200),
  });

  // 6) Intégral — TOUT le cours d'un coup
  exams.push({
    slug: "examen-integral",
    title: isFr ? "Examen Intégral — tout le cours" : "Sınav — Tüm ders",
    subtitle: isFr
      ? `${all.length} questions · le programme entier de macro`
      : `${all.length} soru · tüm makro programı`,
    emoji: "🏆",
    durationMin: 70,
    passingScore: pass(all.length),
    questions: reId(all, 31400),
  });

  return exams;
}

export const extraExamsMacroFr = buildExtraExams(qcmByChapter, "fr");
export const extraExamsMacroTr = buildExtraExams(qcmByChapterTr, "tr");
