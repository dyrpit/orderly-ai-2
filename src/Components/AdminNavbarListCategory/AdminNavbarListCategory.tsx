import { useState } from "react";
import { ANArrow, ANList, ANListItem, ANListItemContainer, ANTitle, ANTitleContainer, AdminNavbarListContainer } from "./AdminNavbarListCategory.styles";
import { Fade } from "@mui/material";

interface AdminNavbarListCategoryProps {
 category: string;
 elements: string[];
}

export function AdminNavbarListCategory({ category }: AdminNavbarListCategoryProps) {
 const [isActive, setIsActive] = useState(false);

 const [listDataElements, setListDataElements] = useState<string[]>([]);

 const toggleActive = () => {
  setIsActive(!isActive);
  generateRandomElements();
 };

 const generateRandomElements = () => {
  const items: string[] = [];
  const randomInteger = Math.floor(Math.random() * (10 - 1) + 1);

  for (let i = 1; i <= randomInteger; i++) {
   items.push(`Item ${i}`);
  }
  setListDataElements(items);
 };

 return (
  <AdminNavbarListContainer>
   <ANTitleContainer>
    <ANArrow className={isActive ? "active" : ""} onClick={toggleActive}></ANArrow>
    <ANTitle>{category}</ANTitle>
   </ANTitleContainer>

   {isActive && (
    <ANList>
     <ANListItemContainer>
      {listDataElements.map((value, index) => (
       <Fade in={true} unmountOnExit>
        <ANListItem key={index}>{value}</ANListItem>
       </Fade>
      ))}
     </ANListItemContainer>
    </ANList>
   )}
  </AdminNavbarListContainer>
 );
}
