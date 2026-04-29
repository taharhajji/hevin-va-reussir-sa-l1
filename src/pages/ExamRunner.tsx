import { useParams, Navigate } from "react-router-dom";
import { exams } from "../data/exams";
import QuizRunner from "../components/QuizRunner";

export default function ExamRunner() {
  const { slug } = useParams();
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) return <Navigate to="/examens" replace />;
  return (
    <QuizRunner
      title={exam.title}
      subtitle={exam.subtitle}
      questions={exam.questions}
      mode="exam"
      durationMin={exam.durationMin}
      passingScore={exam.passingScore}
      storageKey={`exam-${exam.slug}`}
    />
  );
}
