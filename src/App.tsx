import { Outlet } from 'react-router-dom';
import './App.css';
import { AdminContent } from './Components';

function App() {

  return (
    <>
      <div>NAVBAR SECTION</div>
      <Outlet />
      <AdminContent />
    </>
  );
}

export default App;
