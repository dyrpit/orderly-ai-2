import { User, UserRole } from "./types";

export const fetchDataAndSetState = (path: string, setStateCallback: (arg0: any) => void) => {
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
    return;
   });
};

export const toggleRole = (user: User) => {
 return user.role === UserRole.admin ? UserRole.user : UserRole.admin;
};

function generateRandomPastelColor() {
 const hue = Math.floor(Math.random() * 360);
 const lightness = Math.floor(Math.random() * 41) + 30;
 return `hsl(${hue}, 100%, ${lightness}%)`;
}

export function generateRandomPastelColorsArray(size: number) {
 const colorsArray = [];
 for (let i = 0; i < size; i++) {
  colorsArray.push(generateRandomPastelColor());
 }
 return colorsArray;
}
