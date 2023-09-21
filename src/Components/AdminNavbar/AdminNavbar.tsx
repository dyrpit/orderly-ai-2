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
   <ANButton sx={{ height: "60px" }} onClick={toggleListVisibility}>
    Categories/Items
   </ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
      <ANButton sx={{ width: "100%", height: "fit-content", margin: "0 auto 20px auto", fontSize: "12px" }}>Add Category</ANButton>
     </Link>
     {listDataCategories.map((item, index) => (
      <AdminNavbarListCategory key={index} category={item} elements={generateRandomElements()} />
     ))}
    </ANList>
   </Fade>
   <Link to="/admin/edit" style={{ textDecoration: "none" }}>
    <ANButton>Edit Users</ANButton>
   </Link>
  </ANContainer>
 );
}
