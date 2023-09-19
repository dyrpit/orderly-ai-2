import React, { useState, useEffect } from "react";
import { UsersEditCheckbox, UsersEditContainer, UsersEditList, UsersEditListItem, UsersEditListRow } from "./UsersEdit.styles";
import { Checkbox } from "@mui/material";

interface UserData {
 id: number;
 email: string;
 role: string;
}

export function UsersEdit() {
 const [userData, setUserData] = useState<UserData[]>([]);

 // Use an object to store admin status for each user by their ID
 const [isAdmin, setIsAdmin] = useState<{ [key: number]: boolean }>({});

 useEffect(() => {
  // Fetch the JSON data from the file
  fetch("/src/Data/users.json") // Adjust the path as needed
   .then((response) => response.json())
   .then((data) => {
    // Once data is fetched, update the state with the JSON data
    setUserData(data.users);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleCheckboxChange = (userId: number) => {
  // Create a new object to update the isAdmin state while preserving the existing values
  setIsAdmin((prevIsAdmin) => ({
   ...prevIsAdmin,
   [userId]: !prevIsAdmin[userId], // Toggle admin status for the specific user
  }));
 };

 const saveUserDataToJson = () => {
  const updatedUserData = userData.map((user) => ({
   ...user,
   role: isAdmin[user.id] ? "admin" : "user",
  }));
  console.log(updatedUserData);

  // You can now send updatedUserData to your server for further processing and saving
  // Example: fetch("/api/saveUserData", { method: "POST", body: JSON.stringify(updatedUserData) })
 };

 return (
  <div>
   <UsersEditContainer>
    <UsersEditList>
     {userData.map((user) => (
      <UsersEditListRow key={user.id}>
       <UsersEditListItem>
        Email: {user.email}
        <UsersEditCheckbox control={<Checkbox defaultChecked={isAdmin[user.id]} color="primary" onChange={() => handleCheckboxChange(user.id)} />} label="Admin" labelPlacement="end" />
       </UsersEditListItem>
      </UsersEditListRow>
     ))}
    </UsersEditList>
   </UsersEditContainer>
   <button onClick={saveUserDataToJson}>Save to JSON</button>
  </div>
 );
}
