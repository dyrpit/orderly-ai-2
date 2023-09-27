import { useContext, useEffect } from "react";
import useAuth from "./useAuth";
import { OrderAiContext } from "../Context/ContextProvider";

export const useUserSession = () => {
 const { getIsTokenExist, removeAuthToken } = useAuth();
 const { loggedUserEmail } = useContext(OrderAiContext);
 const checkForInactivity = () => {
  if (getIsTokenExist()) {
   const expireTime = localStorage.getItem("expireTime");
   if (expireTime && parseFloat(expireTime) < Date.now()) {
    removeAuthToken();
    alert("Session expired. You have been logged out!");
   }
  }
 };

 const updateExpireTime = () => {
  if (getIsTokenExist()) {
   const expireTime: number = Date.now() + 500000;
   localStorage.setItem("expireTime", expireTime.toString());
  }
 };

 useEffect(() => {
  updateExpireTime();
  if (getIsTokenExist()) {
   const interval = setInterval(() => {
    checkForInactivity();
   }, 1000);
   return () => clearInterval(interval);
  }
 }, [loggedUserEmail]);

 useEffect(() => {
  window.addEventListener("click", updateExpireTime);
  window.addEventListener("keypress", updateExpireTime);
  window.addEventListener("scroll", updateExpireTime);
  window.addEventListener("mousemove", updateExpireTime);

  return () => {
   window.removeEventListener("click", updateExpireTime);
   window.removeEventListener("keypress", updateExpireTime);
   window.removeEventListener("scroll", updateExpireTime);
   window.removeEventListener("mousemove", updateExpireTime);
  };
 }, []);
};
