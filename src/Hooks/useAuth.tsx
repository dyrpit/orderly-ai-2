import { useContext, useState } from "react";
import { OrderAiContext } from "../Context/ContextProvider";
const useAuth = () => {
 const savedToken = localStorage.getItem("authToken");
 const [authToken, setAuthToken] = useState(savedToken || "");
 const { users } = useContext(OrderAiContext);

 const saveAuthToken = (token: string) => {
  localStorage.setItem("authToken", token);
  setAuthToken(token);
 };

 const removeAuthToken = () => {
  localStorage.removeItem("authToken");
  setAuthToken("");
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
  console.log({ jwtToken });
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

 return {
  authToken,
  saveAuthToken,
  removeAuthToken,
  getMatchUser,
  generateToken,
  getIsEmailExist,
 };
};

export default useAuth;
