import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chapitres" element={<Chapters />} />
        <Route path="/chapitres/:slug" element={<ChapterDetail />} />
        <Route path="/qcm" element={<QCM />} />
        <Route path="/qcm/:slug" element={<QCMRunner />} />
        <Route path="/examens" element={<Exams />} />
        <Route path="/examens/:slug" element={<ExamRunner />} />
        <Route path="/exercices" element={<Exercises />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
