import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./base.css";
import App from "./App";
import AppContext from "./Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
);
    