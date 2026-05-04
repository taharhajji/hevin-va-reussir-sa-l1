import { useParams, Navigate, useSearchParams } from "react-router-dom";
import { useQCMSets } from "../data/useSubjectData";
import QuizRunner from "../components/QuizRunner";
import { useLang } from "../i18n/context";
import { useSubject } from "../subject/context";

export default function QCMRunner() {
  const { slug } = useParams();
  const { t } = useLang();
  const { subject } = useSubject();
  const [params] = useSearchParams();
  const shuffle = params.get("shuffle") === "1";
  const sets = useQCMSets();
  const base = `/${subject ?? "macro"}`;
  const chNum = slug?.replace(/^ch/, "");
  const set = sets.find((q) => String(q.chapter) === chNum);
  if (!set) return <Navigate to={`${base}/qcm`} replace />;
  return (
    <QuizRunner
      title={`${set.emoji} ${t("navQCM")} — ${set.title}${shuffle ? " 🎲" : ""}`}
      subtitle={`${t("chapterLabel")} ${set.chapter} · ${t("qcmRunnerSubtitle")}${
        shuffle ? " · ordre aléatoire" : ""
      }`}
      questions={set.questions}
      mode="practice"
      shuffle={shuffle}
      // Storage key includes shuffle to avoid reusing answers between modes.
      storageKey={`qcm-${subject ?? "macro"}-ch${set.chapter}${shuffle ? "-rnd" : ""}`}
    />
  );
}
