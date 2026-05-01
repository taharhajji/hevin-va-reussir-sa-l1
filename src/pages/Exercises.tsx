import { useState } from "react";
import { useExerciseSections } from "../data/useSubjectData";
import Markdown from "../components/Markdown";
import { useLang } from "../i18n/context";

export default function Exercises() {
  const { t } = useLang();
  const sections = useExerciseSections();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
        {t("exercisesTitle")}
      </h1>
      <p className="text-slate-600 mb-8">{t("exercisesIntro")}</p>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.slug} className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{section.emoji}</span>
              <h2 className="font-display text-2xl font-bold text-slate-900">{section.title}</h2>
            </div>
            <div className="prose-ludic mt-3 text-slate-700">
              <Markdown>{section.intro}</Markdown>
            </div>
            {section.formula && (
              <div className="mt-3 bg-brand-50 border border-brand-200 rounded-xl p-3 text-center">
                <Markdown>{`$$ ${section.formula} $$`}</Markdown>
              </div>
            )}
            <div className="mt-5 space-y-4">
              {section.exercises.map((ex) => (
                <ExerciseCard key={ex.id} exercise={ex} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ExerciseCard({
  exercise,
}: {
  exercise: import("../data/exercises").Exercise;
}) {
  const { t } = useLang();
  const [showHint, setShowHint] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="border-2 border-slate-200 rounded-xl p-4 hover:border-brand-300 transition">
      <header className="flex items-start gap-3">
        <span className="text-2xl">{exercise.emoji}</span>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold">
            {exercise.category}
          </p>
          <h3 className="font-display text-lg font-bold text-slate-900">{exercise.title}</h3>
        </div>
      </header>
      <div className="prose-ludic mt-3 text-slate-700 text-sm">
        <Markdown>{exercise.prompt}</Markdown>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {exercise.hint && (
          <button
            onClick={() => setShowHint((s) => !s)}
            className="px-3 py-1.5 rounded-full text-sm bg-sun-400/20 hover:bg-sun-400/30 text-amber-900 font-medium"
          >
            {showHint ? t("hideHint") : t("showHint")}
          </button>
        )}
        <button
          onClick={() => setShowSteps((s) => !s)}
          className="px-3 py-1.5 rounded-full text-sm bg-brand-100 hover:bg-brand-200 text-brand-800 font-medium"
        >
          {showSteps ? t("hideMethod") : t("showMethod")}
        </button>
        <button
          onClick={() => setShowAnswer((s) => !s)}
          className="px-3 py-1.5 rounded-full text-sm bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-medium"
        >
          {showAnswer ? t("hideAnswer") : t("showAnswer")}
        </button>
      </div>

      {showHint && exercise.hint && (
        <div className="mt-3 p-3 rounded-xl bg-sun-400/10 border border-sun-400/30 text-sm text-amber-900">
          💡 {exercise.hint}
        </div>
      )}

      {showSteps && (
        <div className="mt-3 p-4 rounded-xl bg-brand-50 border border-brand-200">
          <p className="text-xs uppercase tracking-wider text-brand-700 font-semibold mb-2">
            {t("stepByStepLabel")}
          </p>
          <ol className="space-y-2 text-sm">
            {exercise.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-brand-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 prose-ludic">
                  <Markdown>{step}</Markdown>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {showAnswer && (
        <div className="mt-3 p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold">
          {t("answerLabel")} {exercise.answer}
        </div>
      )}
    </article>
  );
}
