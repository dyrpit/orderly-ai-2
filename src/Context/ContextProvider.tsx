import { ReactNode, createContext, useState } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, ProductData, User } from "./types";

type OrderAiContextType = {
  isModalOpen: boolean;
  currentModal: string;
  categories: CategoryData[] | null;
  users: User[];
  jsonData: ProductData[] | null; // Dodaj pole jsonData do kontekstu
  changeModal: (element: string) => void;
  handleCategoryChange: VoidFunction;
  handleItemChange: () => void;
  handleUserChange: () => void;
  handleModalOpen: VoidFunction;
  handleModalClose: VoidFunction;
  setUsers: (element: any) => void;
  setJsonData: (data: ProductData[] | null) => void; // Dodaj metodę setJsonData do kontekstu
};

type OrderAiContextProviderProps = {
  children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
  isModalOpen: false,
  currentModal: "none",
  categories: [],
  users: [],
  jsonData: null, // Inicjalnie ustaw null dla jsonData
  changeModal: () => null,
  handleCategoryChange: () => null,
  handleItemChange: () => {},
  handleUserChange: () => {},
  handleModalOpen: () => null,
  handleModalClose: () => null,
  setUsers: () => null,
  setJsonData: () => null, // Dodaj inicjalne ustawienie dla setJsonData
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const [jsonData, setJsonData] = useState<ProductData[] | null>(null); // Inicjalizuj stan dla jsonData

  const value = {
    ...useOrderAi(),
    jsonData, // Przekaż jsonData do kontekstu
    setJsonData, // Przekaż setJsonData do kontekstu
  };

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
