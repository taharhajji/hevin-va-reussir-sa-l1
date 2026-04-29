import { useParams, Navigate } from "react-router-dom";
import { qcmByChapterByLang } from "../data/qcm";
import QuizRunner from "../components/QuizRunner";
import { useLang } from "../i18n/context";

export default function QCMRunner() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const sets = qcmByChapterByLang[lang];
  const chNum = slug?.replace(/^ch/, "");
  const set = sets.find((q) => String(q.chapter) === chNum);
  if (!set) return <Navigate to="/qcm" replace />;
  return (
    <QuizRunner
      title={`${set.emoji} ${t("navQCM")} — ${set.title}`}
      subtitle={`${t("chapterLabel")} ${set.chapter} · ${t("qcmRunnerSubtitle")}`}
      questions={set.questions}
      mode="practice"
      storageKey={`qcm-ch${set.chapter}`}
    />
  );
}
