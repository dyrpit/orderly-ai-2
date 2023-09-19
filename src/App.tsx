import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Products from "./Pages/Products";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./Pages/NotFound";
import { LoginModal, RegisterModal } from "./Components";
import { AdminPage } from "./Pages";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="Products" element={<Products />}></Route>
      <Route path="Admin" element={<AdminPage />}></Route>
      <Route path="Login" element={<LoginModal />}></Route>
      <Route path="Register" element={<RegisterModal />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
