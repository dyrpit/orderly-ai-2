import { ANButton, ANButtonSmall, ANContainer, ANList } from "./AdminNavbar.styles";
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
   <ANButton sx={{ minHeight: "60px" }} onClick={toggleListVisibility}>
    Categories/Items
   </ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
      <ANButtonSmall>New Category</ANButtonSmall>
     </Link>
     <Link to="/admin/additem/" style={{ textDecoration: "none" }}>
      <ANButtonSmall>New Item</ANButtonSmall>{" "}
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
