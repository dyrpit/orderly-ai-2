import React, { useState, useEffect } from "react";
import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";


export function Category() {

const {products} = useOrderAi();

  return (
   <BoxesContainer>
    {products.map((products, index) => (
     <Link to="/Products" key={index} style={{ textDecoration: "none" }}>
      <CategoryBoxContainer style={{ backgroundColor: products.color }}>
       <CategoryBoxContent>
        <div style={{ textAlign: "center" }}>
         <h1>{products.category}</h1>
        </div>
        {/* <img src={products.categoryimageurl}></img> */}
       </CategoryBoxContent>
      </CategoryBoxContainer>
     </Link>
    ))}
   </BoxesContainer>
  );
}
