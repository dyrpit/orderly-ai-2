import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { AddCategory, EditItem, AddItem, LoginModal, RegisterModal, UsersEdit, EditCategory } from "./Components";
import { AdminPage, Home, ProductPage, NotFound } from "./Pages";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path=":categoryName" element={<ProductPage />}></Route>
      <Route path="admin" element={<AdminPage />}>
        <Route path="addcategory" element={<AddCategory />} />
        <Route path="editcategory/:id" element={<EditCategory />} />"
        <Route path="edituser" element={<UsersEdit />} />
        <Route path="additem" element={<AddItem />} />
        <Route path="edititem/:id" element={<EditItem />} />"
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
