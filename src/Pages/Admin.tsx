import { MainContainer, UsersEdit } from "../Components";
import { AdminNavbar } from "../Components/AdminNavbar/AdminNavbar";

function Admin() {
    return (
      <MainContainer>
        <AdminNavbar></AdminNavbar>
        <UsersEdit></UsersEdit>
      </MainContainer>
    );
  }
  
  export default Admin;