import { useContext, useState } from "react";
import { OrderAiContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
 const savedToken = localStorage.getItem("authToken");
 const [authToken, setAuthToken] = useState(savedToken || "");
 const { users } = useContext(OrderAiContext);
 const navigate = useNavigate();
 const saveAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
  setAuthToken(token);
 };

 const removeAuthToken = () => {
  localStorage.removeItem("authToken");
  setAuthToken("");
  navigate("/");
 };

 const generateToken = (user: any) => {
  const HMACSHA256 = (stringToSign: string, secret: string) => "not_implemented";

  const header = {
   algorithm: "HS256",
   type: "JWT",
  };
  const encodedHeaders = btoa(JSON.stringify(header));

  const claims = {
   email: user.email,
   password: user.password,
   role: user.role,
  };

  const encodedPlayload = btoa(JSON.stringify(claims));

  const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, "mysecret");
  const encodedSignature = btoa(signature);

  const jwtToken = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`;
  saveAuthToken(jwtToken);
 };

 const getMatchUser = (email: string, password: string) => {
  const matchUser = users.find((user) => user.email === email);
  if (matchUser?.password === password) {
   return matchUser;
  }
  return false;
 };

 const getIsEmailExist = (email: string) => {
  const isEmailExist = users.find((user) => user.email === email);
  if (isEmailExist === undefined) {
   return false;
  } else {
   return true;
  }
 };

 const getIsTokenExist = () => {
  try {
   if (localStorage.authToken.length > 0) {
    return true;
   }
   return false;
  } catch (error) {
   return false;
  }
 };

 return {
  authToken,
  saveAuthToken,
  removeAuthToken,
  getMatchUser,
  generateToken,
  getIsEmailExist,
  getIsTokenExist,
 };
};

export default useAuth;
