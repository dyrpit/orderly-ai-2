import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AdminPage, ProductPage } from "./Pages/index.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme/ThemeProvider.ts";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    path: "/admin",
    element: <AdminPage />,
    handle: {
     crumb: () => "admin panel",
    },
   },
   {
    path: "/product",
    element: <ProductPage />,
    handle: {
     crumb: () => "product page",
    },
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <ThemeProvider theme={theme}>
  <React.StrictMode>
   <App />
  </React.StrictMode>
 </ThemeProvider>,
);
