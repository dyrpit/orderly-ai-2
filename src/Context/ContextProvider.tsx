import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { Category, ProductType, User } from "./types";

type OrderAiContextType = {
 isModalOpen: boolean;
 currentModal: string;
 categories: Category[] | null;
 products: ProductType[];
 users: User[];
 changeModal: (element: string) => void;
 handleCategoryChange: VoidFunction;
 handleItemChange: () => void;
 handleUserChange: () => void;
 handleModalOpen: VoidFunction;
 handleModalClose: VoidFunction;
 setUsers: (element: any) => void;
};

type OrderAiContextProviderProps = {
 children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
 isModalOpen: false,
 currentModal: "none",
 categories: [],
 products: [],
 users: [],
 changeModal: () => null,
 handleCategoryChange: () => null,
 handleItemChange: () => {},
 handleUserChange: () => {},
 handleModalOpen: () => null,
 handleModalClose: () => null,
 setUsers: () => null,
});

//Nie dotykajcie ;)
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
 const value = useOrderAi();

 return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
