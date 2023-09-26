import { useNavigate } from "react-router-dom";
import { User } from "../Context/types";

const useDecrypt = () => {
 const navigate = useNavigate();

 const parseJwtToken = (): User | undefined => {
  let token: string = localStorage.authToken;
  try {
   let base64Url = token.split(".")[1];
   let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
   let jsonPayload = decodeURIComponent(
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
   navigate("/");
  }
 };

 return {
  parseJwtToken,
 };
};

export default useDecrypt;
