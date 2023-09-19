import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Products from "./Pages/Products";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./Pages/NotFound";
import "./App.css";
import { AdminPage } from "./Pages";
import "./App.css";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
   <Route path="/" element={<Home />}></Route>
   <Route path="products" element={<Products />}></Route>
   <Route path="admin" element={<AdminPage />}></Route>
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
