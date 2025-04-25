import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./base.css";
import App from "./App";
import MainContext from "./Config";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
