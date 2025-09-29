import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";   // <-- change this
import App from "./App.jsx";
import CourseProvider from "./state/CourseProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <CourseProvider>
        <App />
      </CourseProvider>
    </HashRouter>
  </React.StrictMode>
);
