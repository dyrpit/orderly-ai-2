import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";


export function Category() {

const {categories} = useOrderAi();

  return (
   <BoxesContainer>
    {categories.map((products, index) => (
     <Link to="/Products" key={index} style={{ textDecoration: "none" }}>
      <CategoryBoxContainer style={{ backgroundColor: products.color }}>
       <CategoryBoxContent>
        <div style={{ textAlign: "center" }}>
         <h1>{products.name}</h1>
        </div>
        <img src={products.imageUrl}></img>
       </CategoryBoxContent>
      </CategoryBoxContainer>
     </Link>
    ))}
   </BoxesContainer>
  );
}
