import { useEffect } from "react";
import { User, UserRole } from "./types";

export const fetchDataAndSetState = (path: string, setStateCallback: (arg0: any) => void) => {
 useEffect(() => {
  fetch(path)
   .then((response) => {
    if (!response.ok) {
     throw new Error("Network response was not ok");
    }
    return response.json();
   })
   .then((data) => {
    setStateCallback(data);
   })
   .catch((error) => {
    console.error(`Error fetching JSON data from ${path}:`, error);
   });
 }, []);
};

export const toggleRole = (user: User) => {
 return user.role === UserRole.admin ? UserRole.user : UserRole.admin;
};
