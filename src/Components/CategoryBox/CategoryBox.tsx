import React, { useState, useEffect } from "react";
import { BoxesContainer, CategoryBoxContainer, CategoryBoxContent } from "./CategoryBox.style";
import { Link } from "react-router-dom";

interface CategoryData {
  category: string;
  color: string;
}

export function Category() {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    fetch("/src/Data/products.json") 
      .then((response) => response.json())
      .then((data) => {

        const processedData = data.products.map((product: any) => ({
          category: product.category,
          color: product.color,
        }));
        setCategories(processedData);
        console.error("Poprawne wczytanie danych");
      })
      .catch((error) => {
        console.error("Błąd podczas wczytywania danych z JSON:", error);
      });
  }, []);

  return (
    <BoxesContainer>
      {categories.map((category, index) => (
        <Link to="/Products" key={index} style={{ textDecoration: 'none'}}>
          <CategoryBoxContainer style={{ backgroundColor: category.color }}>
            <CategoryBoxContent>
              <div className="Title">
                <h1>{category.category}</h1>
              </div>
            </CategoryBoxContent>
          </CategoryBoxContainer>
        </Link>
      ))}
    </BoxesContainer>
  );
}
