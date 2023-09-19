import { ANButton, ANContainer, ANList } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState, useContext } from "react";
import { AdminNavbarListCategory } from "../AdminNavbarListCategory/AdminNavbarListCategory";
import { VariableContext } from "../../Context/variableContext/VariableContextProvider";

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

 const { handleEditUserVisible } = useContext(VariableContext);
 const toggleeditUsersVisible = () => {
    handleEditUserVisible();
 }

 return (
  <ANContainer>
   <ANButton>Add Category</ANButton>
   <ANButton onClick={toggleListVisibility}>Categories</ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     {listDataCategories.map((item, index) => (
      <AdminNavbarListCategory key={index} category={item} elements={generateRandomElements()} />
     ))}
    </ANList>
   </Fade>
   <ANButton onClick={toggleeditUsersVisible}>Edit Users</ANButton>
  </ANContainer>
 );
}
