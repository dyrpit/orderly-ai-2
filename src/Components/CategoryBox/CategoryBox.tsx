import { CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

type CategoryProps = {
  title: string; 
  description: string;
};

export function Category({ title, description }: CategoryProps) {
  return (
    <Link to="/Products">
      <CategoryBoxContainer>
        <CategoryBoxContent>
          <div className="Title">{title}</div>
          <div className="Desc">{description}</div>
        </CategoryBoxContent>
      </CategoryBoxContainer>
    </Link>
  );
}
