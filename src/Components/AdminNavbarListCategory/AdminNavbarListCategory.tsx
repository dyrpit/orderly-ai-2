import { useState } from "react";
import { ANArrow, ANList, ANListItem, ANListItemContainer, ANTitle, ANTitleContainer, AdminNavbarListContainer } from "./AdminNavbarListCategory.styles";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryData } from "../../Context/types";

export function AdminNavbarListCategory({ category }: { category: CategoryData }) {
 const [isActive, setIsActive] = useState(false);

 const toggleActive = () => {
  setIsActive(!isActive);
 };

 return (
  <AdminNavbarListContainer>
   <ANTitleContainer>
    <ANArrow className={isActive ? "active" : ""} onClick={toggleActive}></ANArrow>
    <Link to={`editcategory/${category.id}`} style={{ textDecoration: "none" }}>
     <ANTitle className={isActive ? "active" : ""}>{category.name}</ANTitle>
    </Link>
   </ANTitleContainer>

   {isActive && (
    <ANList>
     <ANListItemContainer>
      {category.products.map((product: any, index: any) => (
       <Fade in={true} unmountOnExit key={index}>
        <Link to={`edititem/${product.id}`} style={{ textDecoration: "none", color: "white" }}>
         <ANListItem>• {product.name}</ANListItem>
        </Link>
       </Fade>
      ))}
     </ANListItemContainer>
    </ANList>
   )}
  </AdminNavbarListContainer>
 );
}
