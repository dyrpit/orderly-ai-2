import { ReactNode, createContext } from "react";
import { useVariable } from "./useVariable"; // Renamed from useUser

type VariableContextType = {
 value: number; // Updated from User
 handleValueChange: VoidFunction; // Updated from User

 editUsersVisible: boolean;
 handleEditUserVisible: VoidFunction;
};

type VariableContextProviderProps = {
 children: ReactNode;
};

export const VariableContext = createContext<VariableContextType>({
 value: 0,
 handleValueChange: () => null,
 editUsersVisible: false,
 handleEditUserVisible: () => null,
});

export const VariableContextProvider = ({ children }: VariableContextProviderProps) => {
 const value = useVariable(); // Updated from useUser

 return <VariableContext.Provider value={value}>{children}</VariableContext.Provider>;
};
