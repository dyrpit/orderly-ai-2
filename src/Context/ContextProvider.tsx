import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { Category, ProductType, User } from "./types";

type OrderAiContextType = {
  showButtons: string;
  isModalOpen: boolean;
  currentModal: string;
  categories: Category[] | null;
  products: ProductType[];
  users: User[];
  editUsersVisible: boolean;
  showHideLoginButtons: VoidFunction;
  handleSignInClick: VoidFunction;
  changeModal: (element: string) => void;
  handleCategoryChange: VoidFunction;
  handleItemChange: () => void;
  handleUserChange: () => void;
  handleEditUserVisible: VoidFunction;

};

type OrderAiContextProviderProps = {
  children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
  showButtons: "none",
  isModalOpen: false,
  currentModal: "none",
  categories: [],
  products: [],
  users: [],
  editUsersVisible: false,
  showHideLoginButtons: () => null,
  handleSignInClick: () => null,
  changeModal: () => null,
  handleCategoryChange: () => null,
  handleItemChange: () => { },
  handleUserChange: () => { },
  handleEditUserVisible: () => null,
});

//Nie dotykajcie ;)
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
  const value = useOrderAi();

  return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
