import { useState, useEffect } from "react";
import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

interface CategoryProps {
  title: string;
  description: string;
  color: string;
}

export function Category() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("/src/Data/categories.json") 
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.error("Poprawne wczytanie danych");
      })
      .catch((error) => {
        console.error("Błąd podczas wczytywania danych z JSON:", error);
      });
  }, []);

  return (
    <BoxesContainer>
      {categories.map((category, index) => (
        <Link to="/Products" key={index} style={{textDecoration: 'none'}}>
          <CategoryBoxContainer style={{ backgroundColor: category.color }}>
            <CategoryBoxContent>
              <div className="Title">
                <h1>{category.title}</h1>
              </div>
              <div className="Desc">
                <h3>{category.description}</h3>
              </div>
            </CategoryBoxContent>
          </CategoryBoxContainer>
        </Link>
      ))}
    </BoxesContainer>
  );
}
