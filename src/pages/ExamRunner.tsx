import { useParams, Navigate } from "react-router-dom";
import { useExams } from "../data/useSubjectData";
import QuizRunner from "../components/QuizRunner";
import { useSubject } from "../subject/context";

export default function ExamRunner() {
  const { slug } = useParams();
  const { subject } = useSubject();
  const exams = useExams();
  const base = `/${subject ?? "macro"}`;
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) return <Navigate to={`${base}/examens`} replace />;
  return (
    <QuizRunner
      title={exam.title}
      subtitle={exam.subtitle}
      questions={exam.questions}
      mode="exam"
      durationMin={exam.durationMin}
      passingScore={exam.passingScore}
      storageKey={`exam-${subject ?? "macro"}-${exam.slug}`}
    />
  );
}
