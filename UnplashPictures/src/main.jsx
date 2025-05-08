import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import Context from "./Contexts";
import "./base.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
