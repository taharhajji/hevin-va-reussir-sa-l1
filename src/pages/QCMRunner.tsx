import { useParams, Navigate } from "react-router-dom";
import { useQCMSets } from "../data/useSubjectData";
import QuizRunner from "../components/QuizRunner";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

export default function QCMRunner() {
  const { slug } = useParams();
  const { t } = useLang();
  const { subject } = useSubject();
  const sets = useQCMSets();
  const base = `/${subject ?? "macro"}`;
  const chNum = slug?.replace(/^ch/, "");
  const set = sets.find((q) => String(q.chapter) === chNum);
  if (!set) return <Navigate to={`${base}/qcm`} replace />;
  return (
    <QuizRunner
      title={`${set.emoji} ${t("navQCM")} — ${set.title}`}
      subtitle={`${t("chapterLabel")} ${set.chapter} · ${t("qcmRunnerSubtitle")}`}
      questions={set.questions}
      mode="practice"
      storageKey={`qcm-${subject ?? "macro"}-ch${set.chapter}`}
    />
  );
}
