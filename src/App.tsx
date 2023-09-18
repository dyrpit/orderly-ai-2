import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Admin from './Pages/Admin';
import RootLayout from './Layout/RootLayout';
import NotFound from './Pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='Products' element={<Products/>}></Route>
          <Route path='Admin' element={<Admin/>}></Route>
          <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;
