import { ReactNode, createContext, useState } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
 isModalOpen: boolean;
 currentModal: string;
 categories: CategoryData[] | null;
 users: User[];
 jsonData: CategoryData[] | null;
 changeModal: (element: string) => void;
 handleModalOpen: VoidFunction;
 handleModalClose: VoidFunction;
 handleToggleRoleChange: (id: number) => void;
 setUsers: (element: User[]) => void;
 setJsonData: (data: CategoryData[] | null) => void;
 getEmbedYTLink: (link: string) => string;
};

type OrderAiContextProviderProps = {
 children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
 isModalOpen: false,
 currentModal: "none",
 categories: null,
 users: [],
 jsonData: null,
 changeModal: () => null,
 handleModalOpen: () => null,
 handleModalClose: () => null,
 handleToggleRoleChange: () => {},
 setUsers: () => null,
 setJsonData: () => null,
 getEmbedYTLink: () => "",
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
 const [jsonData, setJsonData] = useState<CategoryData[] | null>(null);

 const value = {
  ...useOrderAi(),
  jsonData,
  setJsonData,
 };

 return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
