import { useContext } from "react";
import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";
import { useOrderAi } from "../../Context/useOrderAi";

import { OrderAiContext } from "../../Context/ContextProvider";

export function Category() {
  const { jsonData, categories } = useContext(OrderAiContext);

  const renderedCategoryBoxes = (jsonData ?? categories ?? []).map((category, index) => (
    <Link to={`${category.name}`} key={index} style={{ textDecoration: "none" }}>
      <CategoryBoxContainer style={{ backgroundColor: category.color }}>
        <CategoryBoxContent>
          <div style={{ textAlign: "center" }}>
            <h1>{category.name}</h1>
          </div>
          <img src={category.imageUrl} alt={category.name} />
        </CategoryBoxContent>
      </CategoryBoxContainer>
    </Link>
  ));

  return <BoxesContainer>{renderedCategoryBoxes}</BoxesContainer>;
}
