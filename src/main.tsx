import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme/ThemeProvider.ts";
import { OrderAiContextProvider } from "./Context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderAiContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </OrderAiContextProvider>
  </React.StrictMode>,
);
