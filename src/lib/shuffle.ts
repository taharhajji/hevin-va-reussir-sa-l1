import type { Question } from "../data/exams";

// Fisher-Yates shuffle (returns a new array, doesn't mutate the original).
function shuffleArray<T>(arr: readonly T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns a new array of questions with both:
 *  - the question order shuffled
 *  - the options inside each question shuffled (and `correct` updated to track
 *    where the correct answer ended up).
 *
 * Each call produces a new random arrangement.
 */
export function shuffleQuestions(questions: readonly Question[]): Question[] {
  return shuffleArray(questions).map((q) => {
    const indexed = q.options.map((opt, i) => ({ opt, i }));
    const shuffledIndexed = shuffleArray(indexed);
    const newOptions = shuffledIndexed.map((x) => x.opt);
    const newCorrect = shuffledIndexed.findIndex((x) => x.i === q.correct);
    return {
      ...q,
      options: newOptions,
      correct: newCorrect as Question["correct"],
    };
  });
}
