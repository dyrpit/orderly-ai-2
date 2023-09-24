import React, { useContext } from "react";
import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { OrderAiContext } from "../../Context/ContextProvider";

export function Category() {
  const { jsonData, categories } = useContext(OrderAiContext);

  const renderedCategoryBoxes = jsonData
    ? jsonData.map((product, index) => (
        <Link to="/Products" key={index} style={{ textDecoration: "none" }}>
          <CategoryBoxContainer style={{ backgroundColor: product.color }}>
            <CategoryBoxContent>
              <div style={{ textAlign: "center" }}>
                <h1>{product.name}</h1>
              </div>
              <img src={product.imageUrl} alt={product.name} />
            </CategoryBoxContent>
          </CategoryBoxContainer>
        </Link>
      ))
    : categories.map((product, index) => (
        <Link to="/Products" key={index} style={{ textDecoration: "none" }}>
          <CategoryBoxContainer style={{ backgroundColor: product.color }}>
            <CategoryBoxContent>
              <div style={{ textAlign: "center" }}>
                <h1>{product.name}</h1>
              </div>
              <img src={product.imageUrl} alt={product.name} />
            </CategoryBoxContent>
          </CategoryBoxContainer>
        </Link>
      ));

  return <BoxesContainer>{renderedCategoryBoxes}</BoxesContainer>;
}
