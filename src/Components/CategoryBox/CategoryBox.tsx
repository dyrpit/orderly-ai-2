import React, { useState, useEffect } from "react";
import { CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

interface CategoryProps {
  title: string;
  description: string;
}

export function Category() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("/src/Data/Categories.json") 
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
    <div>
      {categories.map((category, index) => (
        <Link to="/Products" key={index}>
          <CategoryBoxContainer>
            <CategoryBoxContent>
              <div className="Title">{category.title}</div>
              <div className="Desc">{category.description}</div>
            </CategoryBoxContent>
          </CategoryBoxContainer>
        </Link>
      ))}
    </div>
  );
}
