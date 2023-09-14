import { Outlet } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components';

function App() {

  return (
    <>
      <NavBar />
      <div>NAVBAR SECTION</div>
      <Outlet />
      <div>FOOTER SECTION</div>
    </>
  );
}

export default App;
