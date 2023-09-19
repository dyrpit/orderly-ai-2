import { useEffect, useState } from "react";
import { Item } from "../../types"; // Changed from Category

export const useItem = () => {
 const [items, setItems] = useState<Item[]>([]); // Changed from Category

 useEffect(() => {
  // Fetch the JSON data from the file
  fetch("/src/Data/items.json") // Adjust the path as needed
   .then((response) => response.json())
   .then((data) => {
    // Once data is fetched, update the state with the JSON data
    setItems(data.items); // Changed from Category
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleItemChange = () => {
  // Implement item data changes as needed
 };

 return {
  items, // Changed from Category
  handleItemChange,
 };
};
