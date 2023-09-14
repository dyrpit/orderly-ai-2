import { ANButton, ANContainer, ANList, ANListItem, ANListInner, ANListItemButton, ANCategoryDiv, ANListItemText } from "./AdminNavbar.styles";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { AdminNavbarInnerList } from "../AdminNavbarInnerList/AdminNavbarInnerList";

export function AdminNavbar() {
 const [isListVisible, setListVisible] = useState(false);
 const [randomItemsCount, setRandomItemsCount] = useState(0);
 const toggleListVisibility = () => {
  if (isListVisible) generateRandomItems();
  setListVisible(!isListVisible);
 };

 const generateRandomItems = () => {
  const randomCount = Math.floor(Math.random() * 10) + 1;
  setRandomItemsCount(randomCount);
 };



 const generateRandomSubitems = () => {
  return Array.from({ length: randomItemsCount }).map((_, index) => ({
   id: index,
   name: `Subitem ${index + 1}`,
  }));
 };

 return (
  <ANContainer>
   <ANButton onClick={toggleListVisibility}>Categories</ANButton>
   <Fade in={isListVisible} unmountOnExit>
    <ANList>
     <AdminNavbarInnerList></AdminNavbarInnerList>
     <AdminNavbarInnerList></AdminNavbarInnerList>
     <AdminNavbarInnerList></AdminNavbarInnerList>
    </ANList>
   </Fade>
   <ANButton>Edit Users</ANButton>
  </ANContainer>
 );
}
