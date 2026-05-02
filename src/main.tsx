import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./i18n/context";
import { SubjectProvider } from "./subject/context";
import CustomCursor from "./components/CustomCursor";
import TransitionVideo from "./components/TransitionVideo";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SubjectProvider>
        <LangProvider>
          <App />
          <CustomCursor />
          <TransitionVideo />
        </LangProvider>
      </SubjectProvider>
    </BrowserRouter>
  </StrictMode>
);
