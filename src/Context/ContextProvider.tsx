import { ReactNode, createContext } from "react";
import { useOrderAi } from "./useOrderAi";

type OrderAiContextType = {
 showButtons: string;
 isModalOpen: boolean;
 currentModal: string;
 showHideLoginButtons: VoidFunction;
 handleSignInClick: VoidFunction;
 changeModal: (element: string) => void;
};

type OrderAiContextProviderProps = {
 children: ReactNode;
};

export const OrderAiContext = createContext<OrderAiContextType>({
 showButtons: "none",
 isModalOpen: false,
 currentModal: "none",
 showHideLoginButtons: () => null,
 handleSignInClick: () => null,
 changeModal: () => null,
});

//Nie dotykajcie ;)
export const OrderAiContextProvider = ({ children }: OrderAiContextProviderProps) => {
 const value = useOrderAi();

 return <OrderAiContext.Provider value={value}>{children}</OrderAiContext.Provider>;
};
