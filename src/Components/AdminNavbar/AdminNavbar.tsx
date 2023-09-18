import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";

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
   items.push(`Category ${i}`);
  }
  setListDataCategories(items);
  console.log(items);
 };

 const generateRandomElements = () => {
  const elements: string[] = [];
  const randomInteger = Math.floor(Math.random() * (10 - 1) + 1);

  for (let i = 1; i <= randomInteger; i++) {
   const category = `Category ${i}`;
   elements.push(category);
  }
  return elements;
 };

 return (
  <ANContainer>
   <ANButton onClick={toggleListVisibility}>Categories</ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     {listDataCategories.map((item, index) => (
      <AdminNavbarListCategory key={index} category={item} elements={generateRandomElements()}/>
     ))}
    </ANList>
   </Fade>
   <ANButton>Edit Users</ANButton>
  </ANContainer>
 );
}
