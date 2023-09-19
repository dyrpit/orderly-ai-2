import { ReactNode, createContext } from "react";
import { useVariable } from "./useVariable"; // Renamed from useUser

type VariableContextType = {
 value: number; // Updated from User
 handleValueChange: () => void; // Updated from User
};

type VariableContextProviderProps = {
 children: ReactNode;
};

export const VariableContext = createContext<VariableContextType>({
 value: 0,
 handleValueChange: () => {},
});

export const VariableContextProvider = ({ children }: VariableContextProviderProps) => {
 const value = useVariable(); // Updated from useUser

 return <VariableContext.Provider value={value}>{children}</VariableContext.Provider>;
};
