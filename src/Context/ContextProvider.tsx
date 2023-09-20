import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { Category, Item, User } from "./types";

type OrderAiContextType = {
 showButtons: string;
 isModalOpen: boolean;
 currentModal: string;
 categories: Category[] | null;
 items: Item[];
 users: User[];
 editUsersVisible: boolean;
 showHideLoginButtons: VoidFunction;
 changeModal: (element: string) => void;
 handleCategoryChange: VoidFunction;
 handleItemChange: () => void;
 handleUserChange: () => void;
 handleEditUserVisible: VoidFunction;
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
 items: [],
 users: [],
 editUsersVisible: false,
 showHideLoginButtons: () => null,
 changeModal: () => null,
 handleCategoryChange: () => null,
 handleItemChange: () => {},
 handleUserChange: () => {},
 handleEditUserVisible: () => null,
 handleModalOpen: () => null,
 handleModalClose: () => null,
});

//Nie dotykajcie ;)
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
 const value = useOrderAi();

 return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
