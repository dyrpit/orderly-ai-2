import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";
import { OrderAiContext } from "../../Context/ContextProvider";
import { useOrderAi } from "../../Context/useOrderAi";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);

 const { products } = useOrderAi();

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
      <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 20px auto", fontSize: "12px" }}>
       New Category
      </ANButton>
     </Link>
     {products.map((product, index) => (
      <AdminNavbarListCategory key={index} category={product.category} />
     ))}
    </ANList>
   </Fade>
   <Link to="/admin/edit" style={{ textDecoration: "none" }}>
    <ANButton>Edit Users</ANButton>
   </Link>
  </ANContainer>
 );
}
