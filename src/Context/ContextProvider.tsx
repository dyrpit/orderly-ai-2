import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
  isModalOpen: boolean;
  currentModal: string;
  categories: CategoryData[] | null;
  jsonData: CategoryData[] | null;
  users: User[];
  changeModal: (element: string) => void;
  handleCategoryChange: VoidFunction;
  handleItemChange: () => void;
  handleUserChange: () => void;
  handleModalOpen: VoidFunction;
  handleModalClose: VoidFunction;
  handleToggleRoleChange: (id: number) => void;
  setUsers: (element: User[]) => void;
  getEmbedYTLink: (link: string) => string;
  setJsonData: (data: CategoryData[] | null) => void;
};

type OrderAiContextProviderProps = {
  children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
  isModalOpen: false,
  currentModal: "none",
  categories: null,
  jsonData: null,
  users: [],
  changeModal: () => null,
  handleCategoryChange: () => null,
  handleItemChange: () => { },
  handleUserChange: () => { },
  handleModalOpen: () => null,
  handleModalClose: () => null,
  handleToggleRoleChange: () => { },
  setUsers: () => null,
  getEmbedYTLink: () => '',
  setJsonData: () => { }
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const value = useOrderAi()
  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
