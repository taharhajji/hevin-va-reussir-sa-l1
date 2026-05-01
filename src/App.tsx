import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import ChapterDetail from "./pages/ChapterDetail";
import Exams from "./pages/Exams";
import ExamRunner from "./pages/ExamRunner";
import QCM from "./pages/QCM";
import QCMRunner from "./pages/QCMRunner";
import Exercises from "./pages/Exercises";
import Formules from "./pages/Formules";
import Splash from "./pages/Splash";
import { useSubject, type Subject } from "./subject/context";
import { useEffect, useRef } from "react";

function SubjectGate({ children, expected }: { children: React.ReactNode; expected: Subject }) {
  const { subject, setSubject } = useSubject();
  // Only sync the URL's subject into context once, on mount. Otherwise the
  // gate keeps "rescuing" the subject from null (e.g. when the user clicks
  // "Changer de matière"), which prevents the navigation back to the splash.
  const synced = useRef(false);
  useEffect(() => {
    if (!synced.current) {
      synced.current = true;
      if (subject !== expected) setSubject(expected);
    }
  }, [expected, subject, setSubject]);
  return <>{children}</>;
}

function RootRoute() {
  const { subject } = useSubject();
  if (subject) return <Navigate to={`/${subject}`} replace />;
  return <Splash />;
}

function LegacyRedirect({ to }: { to: string }) {
  const params = useParams();
  const slug = params.slug ? `/${params.slug}` : "";
  return <Navigate to={`${to}${slug}`} replace />;
}

function makeSubjectRoutes(prefix: string, expected: Subject) {
  return (
    <Route
      key={prefix}
      element={
        <SubjectGate expected={expected}>
          <Layout />
        </SubjectGate>
      }
    >
      <Route path={prefix} element={<Home />} />
      <Route path={`${prefix}/chapitres`} element={<Chapters />} />
      <Route path={`${prefix}/chapitres/:slug`} element={<ChapterDetail />} />
      <Route path={`${prefix}/qcm`} element={<QCM />} />
      <Route path={`${prefix}/qcm/:slug`} element={<QCMRunner />} />
      <Route path={`${prefix}/examens`} element={<Exams />} />
      <Route path={`${prefix}/examens/:slug`} element={<ExamRunner />} />
      <Route path={`${prefix}/exercices`} element={<Exercises />} />
      <Route path={`${prefix}/formules`} element={<Formules />} />
    </Route>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />

      {makeSubjectRoutes("/macro", "macro")}
      {makeSubjectRoutes("/gestion", "gestion")}

      {/* Legacy redirects for the old /chapitres etc. URLs */}
      <Route path="/chapitres" element={<LegacyRedirect to="/macro/chapitres" />} />
      <Route path="/chapitres/:slug" element={<LegacyRedirect to="/macro/chapitres" />} />
      <Route path="/qcm" element={<LegacyRedirect to="/macro/qcm" />} />
      <Route path="/qcm/:slug" element={<LegacyRedirect to="/macro/qcm" />} />
      <Route path="/examens" element={<LegacyRedirect to="/macro/examens" />} />
      <Route path="/examens/:slug" element={<LegacyRedirect to="/macro/examens" />} />
      <Route path="/exercices" element={<LegacyRedirect to="/macro/exercices" />} />
      <Route path="/formules" element={<LegacyRedirect to="/macro/formules" />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
