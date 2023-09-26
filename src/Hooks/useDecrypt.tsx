import { User } from "../Context/types";

const useDecrypt = () => {
 const parseJwtToken = (): User | undefined => {
  const token: string = localStorage.authToken;
  try {
   const base64Url = token.split(".")[1];
   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
   const jsonPayload = decodeURIComponent(
    window
     .atob(base64)
     .split("")
     .map(function (c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
     })
     .join(""),
   );
   return JSON.parse(jsonPayload);
  } catch (error) {
   console.error("Problem with decoding token");
  }
 };

 return {
  parseJwtToken,
 };
};

export default useDecrypt;
