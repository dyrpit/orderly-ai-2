import { useState, useEffect } from "react";
import { UsersEditCheckbox, UsersEditContainer, UsersEditList, UsersEditListItem, UsersEditListRow } from "./UsersEdit.styles";
import { Checkbox } from "@mui/material";

export function UsersEdit() {
 const [userData, setUserData] = useState([]);

 useEffect(() => {
  // Fetch the JSON data from the file
  fetch("/src/Data/users.json") // Adjust the path as needed
   .then((response) => response.json())
   .then((data) => {
    // Once data is fetched, update the state with the JSON data
    setUserData(data.users); // Assuming the JSON structure has a "users" array
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []); // Empty dependency array to ensure the effect runs only once

 return (
  <UsersEditContainer>
   <UsersEditList>
    {userData.map((user, index) => (
     <UsersEditListRow key={index}>
      <UsersEditListItem>Email: {user.email}</UsersEditListItem>
      <UsersEditCheckbox control={<Checkbox defaultChecked={user.role === "admin"} color="primary" />} label="Administrator" labelPlacement="end" />
     </UsersEditListRow>
    ))}
   </UsersEditList>
  </UsersEditContainer>
 );
}
