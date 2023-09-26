import { useEffect } from "react";
import { User, UserRole } from "./types";
import { useOrderAi } from "./useOrderAi";

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
 }, []); // Provide an empty dependency array here
};

export const toggleRole = (user: User) => {
 return user.role === UserRole.admin ? UserRole.user : UserRole.admin;
};

//* Function to generate a random pastel color
function generateRandomPastelColor() {
 const hue = Math.floor(Math.random() * 360);
 const lightness = Math.floor(Math.random() * 41) + 30;
 return `hsl(${hue}, 100%, ${lightness}%)`;
}

//* Function to generate an array of random pastel colors of a given size
export function generateRandomPastelColorsArray(size: number) {
 const colorsArray = [];
 for (let i = 0; i < size; i++) {
  colorsArray.push(generateRandomPastelColor());
 }
 return colorsArray;
}
