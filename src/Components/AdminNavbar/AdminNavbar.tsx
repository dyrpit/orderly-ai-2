import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";
import useDecrypt from "../../Hooks/useDecrypt";
import { User, UserRole } from "../../Context/types";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);
 const { categories } = useOrderAi();
 const { parseJwtToken } = useDecrypt();
 const user: User | undefined = parseJwtToken();

 const toggleListVisibility = () => {
  setListVisible(!isListVisible);
 };

 return (
  <ANContainer>
   <ANButton sx={{ height: "60px" }} onClick={toggleListVisibility}>
    Categories/Items
   </ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
      {user && user.role === UserRole.admin ? <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 20px auto", fontSize: "12px" }}>New Category</ANButton> : null}
     </Link>
     <Link to="/admin/additem/" style={{ textDecoration: "none" }}>
      {user && user.role === UserRole.admin ? <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 0 auto", fontSize: "12px" }}>New Item</ANButton> : null}
     </Link>
     {categories.map((categoryData, index) => (
      <AdminNavbarListCategory category={categoryData} key={index} />
     ))}
    </ANList>
   </Fade>
   <Link to="/admin/edituser" style={{ textDecoration: "none" }}>
    {user && user.role === UserRole.admin ? <ANButton>Edit Users</ANButton> : null}
   </Link>
  </ANContainer>
 );
}
