import { useEffect, useState } from "react";
import { ANArrow, ANList, ANListItem, ANListItemContainer, ANTitle, ANTitleContainer, AdminNavbarListContainer } from "./AdminNavbarListCategory.styles";
import { Fade } from "@mui/material";
import { ANButton } from "../AdminNavbar/AdminNavbar.styles";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";

interface AdminNavbarListCategoryProps {
 category: string;
}

export function AdminNavbarListCategory({ category }: AdminNavbarListCategoryProps) {
 const { products } = useOrderAi();
 const [isActive, setIsActive] = useState(false);
 const [localProducts, setLocalProducts] = useState<any>([]);

 const toggleActive = () => {
  setIsActive(!isActive);
 };

 useEffect(() => {
  const filteredProducts = products.filter((product) => product.category === category);
  setLocalProducts(filteredProducts);
 }, [products, category]);

 return (
  <AdminNavbarListContainer>
   <ANTitleContainer>
    <ANArrow className={isActive ? "active" : ""} onClick={toggleActive}></ANArrow>
    <Link to="editcategory" style={{ textDecoration: "none" }}>
     <ANTitle className={isActive ? "active" : ""}>{category}</ANTitle>
    </Link>
   </ANTitleContainer>

   {isActive && (
    <ANList>
     <ANListItemContainer>
      {localProducts.map((product: any, index: any) => (
       <Fade in={true} unmountOnExit>
        <Link to="/admin/edititem" style={{ textDecoration: "none" , color:"white"}}>
         <ANListItem key={index}>• {product.name}</ANListItem>
        </Link>
       </Fade>
      ))}
     </ANListItemContainer>
     <Link to="/admin/additem" style={{ textDecoration: "none" }}>
      <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 0 auto", fontSize: "12px" }}>New Item</ANButton>{" "}
     </Link>
    </ANList>
   )}
  </AdminNavbarListContainer>
 );
}
