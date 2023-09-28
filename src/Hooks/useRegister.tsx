import { useContext } from "react";
import { OrderAiContext } from "../Context/ContextProvider";
import { UserRole } from "../Context/types";

interface NewUser {
 id: number;
 email: string;
 password: string;
 role: string;
}

const useRegister = () => {
 const { users, setUsers } = useContext(OrderAiContext);
 const generateUniqueID = () => {
  let newID: number;
  do {
   newID = Math.floor(Math.random() * 10000);
  } while (users.some((user) => user.id === newID));
  return newID;
 };
 const registerUser = (user: NewUser) => {
  const newUser = {
   id: generateUniqueID(),
   email: user.email,
   password: user.password,
   role: "user" as UserRole,
  };
  const registerUsers = [...users, newUser];
  setUsers(registerUsers);
 };

 return {
  registerUser,
 };
};

export default useRegister;
