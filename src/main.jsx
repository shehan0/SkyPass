import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Homepage from "./components/Homepage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homepage></Homepage>
  </StrictMode>
);
