import { useEffect, useMemo, useState } from "react";
import type { Question } from "../data/exams";
import { useLang } from "../i18n/context";

type Mode = "exam" | "practice"; // exam: grade only at end ; practice: instant feedback per Q

type Props = {
  title: string;
  subtitle?: string;
  questions: Question[];
  mode?: Mode;
  durationMin?: number;
  passingScore?: number;
  storageKey?: string;
};

const chapterEmoji: Record<number, string> = {
  1: "🌍",
  2: "📊",
  3: "💶",
  4: "🏦",
  5: "🪙",
};

function fmtTime(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function QuizRunner({
  title,
  subtitle,
  questions,
  mode = "exam",
  durationMin,
  passingScore,
  storageKey,
}: Props) {
  const { t } = useLang();
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [current, setCurrent] = useState(0);
  const [showOverviewAfter, setShowOverviewAfter] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  // Timer
  useEffect(() => {
    if (!started || submitted) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [started, submitted]);

  const totalMs = (durationMin ?? 0) * 60 * 1000;
  const elapsed = startedAt ? now - startedAt : 0;
  const remaining = totalMs - elapsed;

  // Auto-submit on timeout (for exam mode)
  useEffect(() => {
    if (mode === "exam" && started && !submitted && totalMs > 0 && remaining <= 0) {
      setSubmitted(true);
    }
  }, [mode, started, submitted, totalMs, remaining]);

  // Persist progress
  useEffect(() => {
    if (!storageKey) return;
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.answers) setAnswers(parsed.answers);
      } catch {
        /* ignore */
      }
    }
  }, [storageKey]);
  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify({ answers }));
  }, [answers, storageKey]);

  const score = useMemo(
    () =>
      questions.reduce(
        (acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0),
        0
      ),
    [answers, questions]
  );

  const byChapter = useMemo(() => {
    const m: Record<number, { total: number; ok: number }> = {};
    for (const q of questions) {
      m[q.chapter] = m[q.chapter] || { total: 0, ok: 0 };
      m[q.chapter].total++;
      if (answers[q.id] === q.correct) m[q.chapter].ok++;
    }
    return m;
  }, [answers, questions]);

  const note20 = ((score / questions.length) * 20).toFixed(1);
  const passed = passingScore ? score >= passingScore : Number(note20) >= 10;

  function pick(qid: number, optionIdx: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qid]: optionIdx }));
  }

  function submit() {
    if (mode === "exam") {
      const unanswered = questions.filter((q) => answers[q.id] == null).length;
      if (
        unanswered > 0 &&
        !confirm(t("quizUnansweredConfirm").replace("{n}", String(unanswered)))
      ) {
        return;
      }
    }
    setSubmitted(true);
    setShowOverviewAfter(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setStarted(false);
    setSubmitted(false);
    setAnswers({});
    setCurrent(0);
    setShowOverviewAfter(false);
    setStartedAt(null);
    if (storageKey) localStorage.removeItem(storageKey);
  }

  // ----- INTRO SCREEN (exam mode) -----
  if (!started && mode === "exam") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-violet-500 text-white p-8 shadow-xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">{title}</h1>
          {subtitle && <p className="text-brand-50 mt-2">{subtitle}</p>}
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="bg-white/15 backdrop-blur rounded-xl p-3">
              <p className="text-xs uppercase tracking-wider text-brand-100">{t("quizQuestionsLabel")}</p>
              <p className="text-2xl font-bold">{questions.length}</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl p-3">
              <p className="text-xs uppercase tracking-wider text-brand-100">{t("quizDuration")}</p>
              <p className="text-2xl font-bold">{durationMin ? `${durationMin} ${t("durationLabel")}` : t("quizFreeDuration")}</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl p-3">
              <p className="text-xs uppercase tracking-wider text-brand-100">{t("quizPassing")}</p>
              <p className="text-2xl font-bold">
                {passingScore ? `${passingScore}/${questions.length}` : "10/20"}
              </p>
            </div>
          </div>
          <ul className="mt-6 text-brand-50 space-y-1 text-sm">
            <li>{t("quizRule1")}</li>
            <li>{t("quizRule2")}</li>
            <li>{t("quizRule3")}</li>
            <li>{t("quizRule4")}</li>
          </ul>
          <button
            onClick={() => {
              setStarted(true);
              setStartedAt(Date.now());
              setNow(Date.now());
            }}
            className="mt-6 bg-sun-400 text-slate-900 hover:bg-sun-500 font-semibold px-6 py-3 rounded-full shadow"
          >
            {t("quizStart")}
          </button>
        </div>
      </div>
    );
  }

  // ----- RESULTS -----
  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div
          className={`rounded-3xl p-8 text-white shadow-xl ${
            passed
              ? "bg-gradient-to-br from-emerald-500 to-teal-600"
              : "bg-gradient-to-br from-rose-500 to-orange-500"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {t("resultBadge")}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            {passed ? t("resultPass") : t("resultFail")}
          </h1>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="bg-white/15 backdrop-blur rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider opacity-80">{t("resultGood")}</p>
              <p className="text-3xl font-bold">
                {score}/{questions.length}
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider opacity-80">{t("resultGrade")}</p>
              <p className="text-3xl font-bold">{note20}</p>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider opacity-80">{t("resultTime")}</p>
              <p className="text-3xl font-bold">{startedAt ? fmtTime(elapsed) : "—"}</p>
            </div>
          </div>
        </div>

        <section className="mt-8 bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
            {t("resultByChapter")}
          </h2>
          <div className="space-y-2">
            {Object.entries(byChapter)
              .sort((a, b) => Number(a[0]) - Number(b[0]))
              .map(([ch, v]) => {
                const pct = (v.ok / v.total) * 100;
                return (
                  <div key={ch}>
                    <div className="flex justify-between text-sm">
                      <span>
                        {chapterEmoji[Number(ch)]} {t("chapterLabel")} {ch}
                      </span>
                      <span className="font-semibold">
                        {v.ok}/{v.total}
                      </span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2 mt-1 overflow-hidden">
                      <div
                        className={`h-full ${
                          pct >= 75
                            ? "bg-emerald-500"
                            : pct >= 50
                            ? "bg-sun-500"
                            : "bg-rose-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
            {t("resultCorrections")}
          </h2>
          <div className="space-y-4">
            {questions.map((q, idx) => {
              const ans = answers[q.id];
              const ok = ans === q.correct;
              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border-2 p-4 ${
                    ok
                      ? "border-emerald-200 bg-emerald-50/40"
                      : "border-rose-200 bg-rose-50/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex items-center justify-center min-w-8 h-8 rounded-full text-sm font-bold ${
                        ok ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{q.prompt}</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        {q.options.map((opt, i) => (
                          <li
                            key={i}
                            className={`flex gap-2 px-3 py-1.5 rounded-lg ${
                              i === q.correct
                                ? "bg-emerald-100 text-emerald-900 font-medium"
                                : i === ans
                                ? "bg-rose-100 text-rose-900"
                                : "text-slate-600"
                            }`}
                          >
                            <span>
                              {i === q.correct
                                ? "✅"
                                : i === ans
                                ? "❌"
                                : "·"}
                            </span>
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 text-sm text-slate-700 bg-white rounded-lg px-3 py-2 border border-slate-200">
                        💡 <strong>{t("resultExplanation")} :</strong> {q.explanation}
                      </div>
                      <div className="mt-2 text-xs text-slate-500 flex gap-2 flex-wrap">
                        <span>{chapterEmoji[q.chapter]} {t("chapterLabel")} {q.chapter}</span>
                        <span>· {q.category}</span>
                        <span>· {q.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-10 flex gap-3 flex-wrap">
          <button
            onClick={reset}
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-semibold"
          >
            {t("resultRetry")}
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-full"
          >
            {t("resultTop")}
          </button>
        </div>
      </div>
    );
  }

  // ----- RUNNING -----
  // For exam mode: show one question at a time.
  // For practice mode: show all and answer as you go.
  if (mode === "exam") {
    const q = questions[current];
    const answered = questions.filter((q) => answers[q.id] != null).length;
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-4 mb-4 sticky top-16 z-20 shadow-sm">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <p className="text-sm text-slate-500">{title}</p>
              <p className="font-semibold text-slate-900">
                {t("quizQuestion")} {current + 1} / {questions.length}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {totalMs > 0 && (
                <div
                  className={`px-3 py-1.5 rounded-full text-sm font-mono font-bold ${
                    remaining < 60_000
                      ? "bg-rose-100 text-rose-700"
                      : remaining < 300_000
                      ? "bg-sun-400/30 text-amber-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  ⏱ {fmtTime(Math.max(0, remaining))}
                </div>
              )}
              <span className="text-xs text-slate-500">
                {t("quizAnswered")} : <strong>{answered}</strong>/{questions.length}
              </span>
            </div>
          </div>
          <div className="bg-slate-200 rounded-full h-1.5 mt-3 overflow-hidden">
            <div
              className="h-full bg-brand-500 transition-all"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-fade-up">
          <div className="text-xs text-slate-500 flex gap-2 mb-2">
            <span>{chapterEmoji[q.chapter]} {t("chapterLabel")} {q.chapter}</span>
            <span>· {q.category}</span>
            <span>· {q.difficulty}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{q.prompt}</h2>
          <ul className="mt-5 space-y-2">
            {q.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => pick(q.id, i)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition flex items-center gap-3 ${
                      selected
                        ? "bg-brand-50 border-brand-500 text-brand-900"
                        : "border-slate-200 hover:border-brand-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-7 h-7 rounded-full font-bold text-sm ${
                        selected
                          ? "bg-brand-500 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t("quizPrev")}
          </button>
          <button
            onClick={() => setShowOverviewAfter(true)}
            className="text-sm text-slate-500 underline"
          >
            {t("quizGrid")}
          </button>
          {current === questions.length - 1 ? (
            <button
              onClick={submit}
              className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
            >
              {t("quizSubmit")}
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
              className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold"
            >
              {t("quizNext")}
            </button>
          )}
        </div>

        {showOverviewAfter && (
          <div
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
            onClick={() => setShowOverviewAfter(false)}
          >
            <div
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg">{t("quizGridTitle")}</h3>
                <button
                  onClick={() => setShowOverviewAfter(false)}
                  className="text-slate-500 hover:text-slate-900"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-8 sm:grid-cols-10 gap-2">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrent(i);
                      setShowOverviewAfter(false);
                    }}
                    className={`aspect-square rounded-lg text-sm font-bold ${
                      i === current
                        ? "bg-brand-600 text-white ring-2 ring-brand-300"
                        : answers[q.id] != null
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-xs text-slate-500">
                <span><span className="inline-block w-3 h-3 bg-emerald-100 rounded mr-1" />{t("quizAnsweredLegend")}</span>
                <span><span className="inline-block w-3 h-3 bg-slate-100 rounded mr-1" />{t("quizEmptyLegend")}</span>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={submit}
                  className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
                >
                  {t("quizSubmitNow")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----- PRACTICE MODE -----
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white p-6 mb-6 shadow-md">
        <h1 className="font-display text-2xl font-bold">{title}</h1>
        {subtitle && <p className="text-brand-50 mt-1">{subtitle}</p>}
        <p className="text-sm text-brand-100 mt-2">{t("practiceMode")}</p>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const answered = ans != null;
          const ok = ans === q.correct;
          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border-2 p-5 transition ${
                !answered
                  ? "border-slate-200"
                  : ok
                  ? "border-emerald-300 bg-emerald-50/30"
                  : "border-rose-300 bg-rose-50/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded text-xs font-bold">
                  Q{idx + 1}
                </span>
                <p className="font-semibold text-slate-900">{q.prompt}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {q.options.map((opt, i) => {
                  const selected = ans === i;
                  const isCorrect = i === q.correct;
                  let cls = "border-slate-200 hover:border-brand-300 hover:bg-slate-50";
                  if (answered) {
                    if (isCorrect) cls = "border-emerald-400 bg-emerald-100 text-emerald-900";
                    else if (selected) cls = "border-rose-400 bg-rose-100 text-rose-900";
                    else cls = "border-slate-200 text-slate-500";
                  } else if (selected) {
                    cls = "bg-brand-50 border-brand-500 text-brand-900";
                  }
                  return (
                    <li key={i}>
                      <button
                        onClick={() => pick(q.id, i)}
                        disabled={answered}
                        className={`w-full text-left px-3 py-2 rounded-lg border-2 flex items-center gap-2 text-sm ${cls}`}
                      >
                        <span className="font-bold w-6">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        <span>{opt}</span>
                        {answered && isCorrect && <span className="ml-auto">✅</span>}
                        {answered && selected && !isCorrect && (
                          <span className="ml-auto">❌</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {answered && (
                <div className="mt-3 text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-200">
                  💡 <strong>{t("resultExplanation")} :</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 sticky bottom-4 z-20 bg-white border border-slate-200 rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{t("currentScore")}</p>
          <p className="font-bold text-lg">
            {score}/{questions.length} ({((score / questions.length) * 20).toFixed(1)}/20)
          </p>
        </div>
        <button
          onClick={reset}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm"
        >
          {t("reset")}
        </button>
      </div>
    </div>
  );
}
