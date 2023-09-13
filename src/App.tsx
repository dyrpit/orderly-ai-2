import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <div>NAVBAR SECTION</div>
      <Outlet />
      <div>FOOTER SECTION</div>
    </>
  );
}

export default App;
