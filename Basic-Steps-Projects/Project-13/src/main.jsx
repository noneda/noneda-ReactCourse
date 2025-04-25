import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./base.css";
import ConfigContext from "./Config";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigContext>
      <App />
    </ConfigContext>
  </StrictMode>
);
