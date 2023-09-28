import React from "react";
import ReactDOM from "react-dom/client";
import { OrderAiContextProvider } from "./Context/ContextProvider.tsx";
import App from "./App.tsx";
import { ThemeContextProvider } from "./Theme/ThemeContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <ThemeContextProvider>
   <OrderAiContextProvider>
    <App />
   </OrderAiContextProvider>
  </ThemeContextProvider>
 </React.StrictMode>,
);
