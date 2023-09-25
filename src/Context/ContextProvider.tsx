import { ReactNode, createContext, useState } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
  isModalOpen: boolean;
  currentModal: string;
  categories: CategoryData[] | null;
  users: User[];
  jsonData: CategoryData[] | null; // Dodaj pole jsonData do kontekstu
  changeModal: (element: string) => void;
  handleCategoryChange: VoidFunction;
  handleItemChange: () => void;
  handleUserChange: () => void;
  handleModalOpen: VoidFunction;
  handleModalClose: VoidFunction;
  handleToggleRoleChange: (id: number) => void;
  setUsers: (element: User[]) => void;
  setJsonData: (data: CategoryData[] | null) => void; // Dodaj metodę setJsonData do kontekstu
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
  jsonData: null, // Inicjalnie ustaw null dla jsonData
  changeModal: () => null,
  handleCategoryChange: () => null,
  handleItemChange: () => { },
  handleUserChange: () => { },
  handleModalOpen: () => null,
  handleModalClose: () => null,
  handleToggleRoleChange: () => { },
  setUsers: () => null,
  setJsonData: () => null, // Dodaj inicjalne ustawienie dla setJsonData
  getEmbedYTLink: () => ''
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const [jsonData, setJsonData] = useState<CategoryData[] | null>(null); // Inicjalizuj stan dla jsonData

  const value = {
    ...useOrderAi(),
    jsonData, // Przekaż jsonData do kontekstu
    setJsonData, // Przekaż setJsonData do kontekstu
  };

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
