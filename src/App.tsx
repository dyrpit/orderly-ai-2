import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, LoginModal } from './Components/index.ts';

function App() {

  return (
    <>
      <div>NAVBAR SECTION</div>
      <Outlet />
    </>
  );
}

export default App;
