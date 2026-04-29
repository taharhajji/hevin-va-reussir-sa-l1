import { useParams, Navigate } from "react-router-dom";
import { examsByLang } from "../data/exams";
import QuizRunner from "../components/QuizRunner";
import { useLang } from "../i18n/context";

export default function ExamRunner() {
  const { slug } = useParams();
  const { lang } = useLang();
  const exams = examsByLang[lang];
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
