import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { Link } from "react-router-dom";

export function AdminNavbar() {
   const [isListVisible, setListVisible] = useState(false);
   const [listDataCategories, setListDataCategories] = useState<string[]>([]);

   const toggleListVisibility = () => {
      if (!isListVisible) generateRandomCategories();
      setListVisible(!isListVisible);
   };

   const generateRandomCategories = () => {
      const items: string[] = [];
      const randomInteger = Math.floor(Math.random() * (10 - 1) + 1);

  for (let i = 1; i <= randomInteger; i++) {
   items.push(`Category Category Category Category Category Category ${i}`);
  }
  setListDataCategories(items);
  console.log(items);
 };

   const generateRandomElements = () => {
      const elements: string[] = [];
      const randomInteger = Math.floor(Math.random() * (10 - 1) + 1);

  for (let i = 1; i <= randomInteger; i++) {
   const category = `Category Category Category Category Category Category Category Category Category ${i}`;
   elements.push(category);
  }
  return elements;
 };

 return (
  <ANContainer>
   <ANButton onClick={toggleListVisibility}>Categories/Items</ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <ANButton sx={{width: "100%", height:"fit-content", margin: "0 auto 20px auto", fontSize:"12px"}}>Add Category</ANButton>
     {listDataCategories.map((item, index) => (
      <AdminNavbarListCategory key={index} category={item} elements={generateRandomElements()} />
     ))}
    </ANList>
   </Fade>
   <ANButton>Edit Users</ANButton>
  </ANContainer>
 );
}
