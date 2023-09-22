import { useContext } from "react";
import { OrderAiContext } from "../Context/ContextProvider";

interface NewUser {
 email: string;
 password: string;
}

const useRegister = () => {
 const { users, setUsers } = useContext(OrderAiContext);
 const registerUser = (user: NewUser) => {
  const newUser = {
   email: user.email,
   password: user.password,
   role: "user",
  };
  const registerUsers = [...users, newUser];
  setUsers(registerUsers);
 };

 return {
  registerUser,
 };
};

export default useRegister;
