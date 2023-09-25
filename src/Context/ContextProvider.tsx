import { ReactNode, createContext, useState } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
  isModalOpen: boolean;
  currentModal: string;
  categories: CategoryData[] | null;
  users: User[];
  // Usuń jsonData z kontekstu
  changeModal: (element: string) => void;
  handleCategoryChange: VoidFunction;
  handleItemChange: () => void;
  handleUserChange: () => void;
  handleModalOpen: VoidFunction;
  handleModalClose: VoidFunction;
  handleToggleRoleChange: (id: number) => void;
  setUsers: (element: User[]) => void;
  // Usuń setJsonData z kontekstu
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
  changeModal: () => null,
  handleCategoryChange: () => null,
  handleItemChange: () => { },
  handleUserChange: () => { },
  handleModalOpen: () => null,
  handleModalClose: () => null,
  handleToggleRoleChange: () => { },
  setUsers: () => null,
  getEmbedYTLink: () => ''
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const value = {
    ...useOrderAi(),
  };

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
