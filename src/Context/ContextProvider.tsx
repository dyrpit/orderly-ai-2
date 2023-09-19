import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";

type OrderAiContextType = {
  value: number;
  handleValueChange: VoidFunction;
};

type OrderAiContextProviderProps = {
  children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
  value: 1,
  handleValueChange: () => null,
});

//Nie dotykajcie ;) 
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const value = useOrderAi();

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
