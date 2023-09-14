import { Outlet } from 'react-router-dom';
import './App.css';
// import { LoginModal, } from './Components/index.ts';
import { AdminNavbar } from "./Components/index.ts";

function App() {

  return (
    <>
      {/* <div>NAVBAR SECTION</div>
      <Outlet />
      <div>FOOTER SECTION</div> */}
      <AdminNavbar></AdminNavbar>
    </>
  );
}

export default App;
