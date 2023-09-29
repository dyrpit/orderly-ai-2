import { ANButton, ANButtonSmall, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useContext, useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";
import { UserRole } from "../../Context/types";
import { OrderAiContext } from "../../Context/ContextProvider";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);
 const { categories, jsonData, gptData, loggedUserRole } = useContext(OrderAiContext);
 const isAdmin = loggedUserRole === UserRole.admin;
 const dataToUse = gptData || jsonData || categories || [];

 const toggleListVisibility = () => {
  setListVisible(!isListVisible);
 };

 return (
  <ANContainer>
   <div style={{ display: "flex", gap: "16px", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <Link to="/admin/edituser" style={{ textDecoration: "none" }}>
     {isAdmin ? <ANButton>Edit Users</ANButton> : null}
    </Link>
    <ANButton sx={{ height: "60px" }} onClick={toggleListVisibility}>
     Categories / Items
    </ANButton>
   </div>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
      {isAdmin ? <ANButtonSmall>New Category</ANButtonSmall> : null}
     </Link>
     <Link to="/admin/additem/" style={{ textDecoration: "none" }}>
      {isAdmin ? <ANButtonSmall>New Item</ANButtonSmall> : null}
     </Link>
     {dataToUse.map((categoryData, index) => (
      <AdminNavbarListCategory category={categoryData} key={index} />
     ))}{" "}
    </ANList>
   </Fade>
  </ANContainer>
 );
}
