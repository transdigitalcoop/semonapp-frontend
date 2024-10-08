import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SemonApp } from "./SemonApp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SemonApp />
  </StrictMode>
);
