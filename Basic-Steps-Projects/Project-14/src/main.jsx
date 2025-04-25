import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import MainContext from "./Config";
import "./base.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
