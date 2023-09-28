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
     {category.products.map(({ id, name }) => (
      <Fade in={true} unmountOnExit key={id}>
       <Link to={`edititem/${id}`} style={{ textDecoration: "none", color: "white" }}>
        <ANListItem>
         {" "}
         <ANListItemContainer>•{name}</ANListItemContainer>
        </ANListItem>
       </Link>
      </Fade>
     ))}
    </ANList>
   )}
  </AdminNavbarListContainer>
 );
}
