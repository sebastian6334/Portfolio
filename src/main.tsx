import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import { TranslateProvider } from "./i18n/TranslateProvider.tsx";

i18next.init({
  interpolation: { escapeValue: false },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslateProvider>
      <App />
    </TranslateProvider>
  </React.StrictMode>
);
