import { ReactNode, createContext } from "react";
import { useItem } from "./useItem"; // Renamed from useOrderAi
import { Item } from "../../types"; // Changed from Category

type ItemContextType = {
 items: Item[]; // Changed from Category
 handleItemChange: () => void; // Changed from Category
};

type ItemContextProviderProps = {
 children: ReactNode;
};

export const ItemContext = createContext<ItemContextType>({
 items: [], // Changed from Category
 handleItemChange: () => {}, // Changed from Category
});

export const ItemContextProvider = ({ children }: ItemContextProviderProps) => {
 const value = useItem(); // Changed from Category

 return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
