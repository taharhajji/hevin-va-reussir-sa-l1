import { useParams, Navigate } from "react-router-dom";
import { qcmByChapter } from "../data/qcm";
import QuizRunner from "../components/QuizRunner";

export default function QCMRunner() {
  const { slug } = useParams();
  const chNum = slug?.replace(/^ch/, "");
  const set = qcmByChapter.find((q) => String(q.chapter) === chNum);
  if (!set) return <Navigate to="/qcm" replace />;
  return (
    <QuizRunner
      title={`${set.emoji} QCM — ${set.title}`}
      subtitle={`Chapitre ${set.chapter} · entraînement avec feedback immédiat`}
      questions={set.questions}
      mode="practice"
      storageKey={`qcm-ch${set.chapter}`}
    />
  );
}
