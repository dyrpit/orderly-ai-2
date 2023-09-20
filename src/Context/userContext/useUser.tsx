import { useEffect, useState } from "react";
import { User } from "../../types";

export const useUser = () => {
 const [users, setUsers] = useState<User[]>([]);

 useEffect(() => {
  // Fetch the JSON data from the file
  fetch("/src/Data/users.json") // Adjust the path as needed
   .then((response) => response.json())
   .then((data) => {
    // Once data is fetched, update the state with the JSON data
    setUsers(data.users);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleUserChange = () => {
  // Implement user data changes as needed
 };

 return {
  users,
  handleUserChange,
 };
};
