import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import MainContext from "./Context";
import App from "./App";
import "./base.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
