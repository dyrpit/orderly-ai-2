import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
 showButtons: string;
 isModalOpen: boolean;
 currentModal: string;
 categories: CategoryData[];
 users: User[];
 showHideLoginButtons: VoidFunction;
 changeModal: (element: string) => void;
 handleCategoryChange: VoidFunction;
 handleItemChange: () => void;
 handleUserChange: () => void;
 handleModalOpen: VoidFunction;
 handleModalClose: VoidFunction;
};

type OrderAiContextProviderProps = {
  children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
 showButtons: "none",
 isModalOpen: false,
 currentModal: "none",
 categories: [],
 users: [],
 showHideLoginButtons: () => null,
 changeModal: () => null,
 handleCategoryChange: () => null,
 handleItemChange: () => {},
 handleUserChange: () => {},
 handleModalOpen: () => null,
 handleModalClose: () => null,
});

//Nie dotykajcie ;)
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const value = useOrderAi();

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
