import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);

 const { categories } = useOrderAi();

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
      <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 20px auto", fontSize: "12px" }}>New Category</ANButton>
     </Link>
     <Link to="/admin/additem/" style={{ textDecoration: "none" }}>
      <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 0 auto", fontSize: "12px" }}>New Item</ANButton>{" "}
     </Link>
     {categories.map((categoryData, index) => (
      <AdminNavbarListCategory category={categoryData} key={index} />
     ))}
    </ANList>
   </Fade>
   <Link to="/admin/edituser" style={{ textDecoration: "none" }}>
    <ANButton>Edit Users</ANButton>
   </Link>
  </ANContainer>
 );
}
