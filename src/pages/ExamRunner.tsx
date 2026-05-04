import { useParams, Navigate, useSearchParams } from "react-router-dom";
import { useExams } from "../data/useSubjectData";
import QuizRunner from "../components/QuizRunner";
import { useSubject } from "../subject/context";

export default function ExamRunner() {
  const { slug } = useParams();
  const { subject } = useSubject();
  const [params] = useSearchParams();
  const shuffle = params.get("shuffle") === "1";
  const exams = useExams();
  const base = `/${subject ?? "macro"}`;
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) return <Navigate to={`${base}/examens`} replace />;
  return (
    <QuizRunner
      title={`${exam.title}${shuffle ? " 🎲" : ""}`}
      subtitle={`${exam.subtitle}${shuffle ? " · ordre aléatoire" : ""}`}
      questions={exam.questions}
      mode="exam"
      durationMin={exam.durationMin}
      passingScore={exam.passingScore}
      shuffle={shuffle}
      storageKey={`exam-${subject ?? "macro"}-${exam.slug}${shuffle ? "-rnd" : ""}`}
    />
  );
}
