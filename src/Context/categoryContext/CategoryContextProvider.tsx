import { ReactNode, createContext } from "react";
import { useCategory } from "./useCategory"; // Renamed from useOrderAi
import { Category } from "../../types";

type CategoryContextType = {
 categories: Category[];
 handleCategoryChange: () => void;
};

type CategoryContextProviderProps = {
 children: ReactNode;
};

export const CategoryContext = createContext<CategoryContextType>({
 categories: [],
 handleCategoryChange: () => {},
});

export const CategoryContextProvider = ({ children }: CategoryContextProviderProps) => {
 const value = useCategory();

 return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
