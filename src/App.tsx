import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./Pages/NotFound";
import { AdminContent, LoginModal, RegisterModal } from "./Components";
import "./App.css";
import { AdminPage } from "./Pages";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
   <Route path="/" element={<Home />}></Route>
   <Route path="products" element={<Products />}></Route>
   <Route path="admin" element={<AdminPage />}></Route>
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
