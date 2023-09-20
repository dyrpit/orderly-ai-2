import { useEffect, useState } from "react";
import { Category } from "../../types";

export const useCategory = () => {
 const [categories, setCategories] = useState<Category[]>([]);

 useEffect(() => {
  // Fetch the JSON data from the file
  fetch("/src/Data/categories.json") // Adjust the path as needed
   .then((response) => response.json())
   .then((data) => {
    // Once data is fetched, update the state with the JSON data
    setCategories(data.categories);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleCategoryChange = () => {
  // Implement user data changes as needed
 };

 return {
  categories,
  handleCategoryChange,
 };
};
