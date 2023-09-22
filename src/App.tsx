import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { AddCategory, AdminContent, LoginModal, RegisterModal, UsersEdit } from "./Components";
import { AdminPage, Home, ProductPage, NotFound } from "./Pages";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="products" element={<ProductPage />}></Route>
      <Route path="admin" element={<AdminPage />}>
        <Route path="addcategory" element={<AddCategory />} />
        <Route path="edit" element={<UsersEdit />} />
      </Route>
      <Route path="login" element={<LoginModal />}></Route>
      <Route path="register" element={<RegisterModal />}></Route>
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
