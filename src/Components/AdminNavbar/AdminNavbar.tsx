import { ANButton, ANContainer, ANContent, ANList, ANListItemButton, ANListItemIcon, ANListItemText } from "./AdminNavbar.styles";

function getItems() {
 return {
  list: [
   {
    id: 1,
    title: "Google",
    items: [
     {
      id: 1,
      name: "Android",
      subitems: [
       {
        id: 1,
        name: "Nougat",
       },
       {
        id: 2,
        name: "Lollipop",
       },
      ],
     },
     {
      id: 2,
      name: "Chrome",
     },
    ],
   },
   {
    id: 2,
    title: "Apple",
    items: [
     {
      id: 1,
      name: "Mac",
     },
     {
      id: 2,
      name: "Iphone",
      subitems: [
       {
        id: 1,
        name: "Iphone 6",
       },
       {
        id: 2,
        name: "Iphone 10",
       },
      ],
     },
    ],
   },
   {
    id: 3,
    title: "Uber",
    items: [
     {
      id: 1,
      name: "Eats",
     },
     {
      id: 2,
      name: "Freight",
     },
    ],
   },
  ],
 };
}

export function AdminNavbar() {
 const items = getItems();
 return (
  <ANContainer>
   <ANContent>
    <ANButton
     onClick={() => {
      alert("Clicked!");
     }}>
     Edit Elements
    </ANButton>
    <ANList>
     <ANListItemButton>
      <ANListItemText primary="ChatBots"></ANListItemText>
     </ANListItemButton>
    </ANList>
    <ANButton>Edit Users</ANButton>
   </ANContent>
  </ANContainer>
 );
}
