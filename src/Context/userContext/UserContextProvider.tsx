import { ReactNode, createContext } from "react";
import { useUser } from "./useUser"; // Renamed from useOrderAi
import { User } from "../../types";

type UserContextType = {
 users: User[];
 handleUserChange: () => void;
};

type UserContextProviderProps = {
 children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
 users: [],
 handleUserChange: () => {},
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
 const value = useUser();

 return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
