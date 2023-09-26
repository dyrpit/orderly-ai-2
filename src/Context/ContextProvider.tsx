import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";
import { CategoryData, User } from "./types";

type OrderAiContextType = {
 isModalOpen: boolean;
 currentModal: string;
 categories: CategoryData[] | null;
 users: User[];
 jsonData: CategoryData[] | null;
 loggedUserRole: string;
 loggedUserEmail: string;
 changeModal: (element: string) => void;
 handleModalOpen: VoidFunction;
 handleModalClose: VoidFunction;
 handleToggleRoleChange: (id: number) => void;
 setUsers: (element: User[]) => void;
 setJsonData: (data: CategoryData[] | null) => void;
 getEmbedYTLink: (link: string) => string;
 saveLoggedUserRole: (string: string) => void;
 saveLoggedUserEmail: (string: string) => void;
 clearLoggedUserRole: () => void;
 clearLoggedUserEmail: () => void;
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
 loggedUserRole: "",
 loggedUserEmail: "",
 changeModal: () => null,
 handleModalOpen: () => null,
 handleModalClose: () => null,
 handleToggleRoleChange: () => {},
 setUsers: () => null,
 setJsonData: () => null,
 getEmbedYTLink: () => "",
 saveLoggedUserRole: () => null,
 saveLoggedUserEmail: () => null,
 clearLoggedUserRole: () => null,
 clearLoggedUserEmail: () => null,
});

export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
 const value = useOrderAi();

 return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
