import { useContext, useEffect, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { CategoryData, ProductData, User } from "./types";
import { fetchDataAndSetState, toggleRole } from "./utils";
import useDecrypt from "../Hooks/useDecrypt";

export const useOrderAi = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [currentModal, setCurrentModal] = useState("none");
 const [categories, setCategories] = useState<CategoryData[]>([]);
 const [jsonData, setJsonData] = useState<CategoryData[] | null>(null);
 const [gptData, setGptData] = useState<CategoryData[] | null>(null);
 const [users, setUsers] = useState<User[]>([]);
 const [loggedUserRole, setLoggedUserRole] = useState("");
 const [loggedUserEmail, setLoggedUserEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("none");
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [jsonData, setJsonData] = useState<CategoryData[] | null>(null);
  const [loggedUserRole, setLoggedUserRole] = useState("");
  const [loggedUserEmail, setLoggedUserEmail] = useState("");
  const { parseJwtToken } = useDecrypt();

  useEffect(() => {
    const token = parseJwtToken();
    if (!token) {
      return;
    }
    setLoggedUserEmail(token.email);
    setLoggedUserRole(token.role);
  }, []);

 fetchDataAndSetState("/src/Data/categories.json", setCategories);
 fetchDataAndSetState("/src/Data/users.json", ({ users }) => setUsers(users));

 //*Used to return categoryId by it's given name. Used in Add/Edit Item.
 const findCategoryId = (categoryName: string): number => {
  if (!categories && !jsonData && !gptData) return 0;
  if (gptData) {
   return gptData.find((category) => category.name === categoryName)?.id || 0;
  }
  if (jsonData) {
   return jsonData.find((category) => category.name === categoryName)?.id || 0;
  }
  return categories.find((category) => category.name === categoryName)?.id || 0;
 };

 //*Used to return random Id to be used for category
 const findFreeCategoryId = (): number => {
  if (!categories && !jsonData && !gptData) return 0;

  let randomId: number = 0;
  if (gptData) {
   do {
    randomId = Math.floor(Math.random() * 1000000);
   } while (gptData.some((category) => category.id === randomId));
  } else if (jsonData) {
   do {
    randomId = Math.floor(Math.random() * 1000000);
   } while (jsonData.some((category) => category.id === randomId));
  } else if (categories) {
   do {
    randomId = Math.floor(Math.random() * 1000000);
   } while (categories.some((category) => category.id === randomId));
  }

  return randomId;
 };

 const addCategory = (category: CategoryData) => {
  if (gptData !== null) {
   const updatedGptData: CategoryData[] = [...gptData, category];
   setGptData(updatedGptData);
  } else if (jsonData !== null) {
   const updatedJsonData: CategoryData[] = [...jsonData, category];
   setJsonData(updatedJsonData);
  } else {
   const updatedCategories: CategoryData[] = [...categories, category];
   setCategories(updatedCategories);
  }
 };

 const editCategory = (category: CategoryData) => {
  if (gptData !== null || jsonData !== null || categories !== null) {
   const targetCategory = gptData?.find((c) => c.id === category.id) || jsonData?.find((c) => c.id === category.id) || categories?.find((c) => c.id === category.id);

   if (targetCategory) {
    if (gptData !== null) {
     const updatedGptData = gptData.map((c) => (c.id === category.id ? category : c));
     setGptData(updatedGptData);
    } else if (jsonData !== null) {
     const updatedJsonData = jsonData.map((c) => (c.id === category.id ? category : c));
     setJsonData(updatedJsonData);
    } else {
     const updatedCategories = categories.map((c) => (c.id === category.id ? category : c));
     setCategories(updatedCategories);
    }
   } else {
    console.error(`Category with ID ${category.id} not found.`);
   }
  } else {
   console.error("No data source available to edit the category.");
  }
 };

 const deleteCategory = (categoryId: number) => {
  if (gptData !== null || jsonData !== null || categories !== null) {
   const targetCategory = gptData?.find((c) => c.id === categoryId) || jsonData?.find((c) => c.id === categoryId) || categories?.find((c) => c.id === categoryId);

   if (targetCategory) {
    if (gptData !== null) {
     const updatedGptData = gptData.filter((c) => c.id !== categoryId);
     setGptData(updatedGptData);
    } else if (jsonData !== null) {
     const updatedJsonData = jsonData.filter((c) => c.id !== categoryId);
     setJsonData(updatedJsonData);
    } else {
     const updatedCategories = categories.filter((c) => c.id !== categoryId);
     setCategories(updatedCategories);
    }
   } else {
    console.error(`Category with ID ${categoryId} not found.`);
   }
  } else {
   console.error("No data source available to delete the category.");
  }
 };

 const findFreeProductId = (): number => {
  if (!categories && !jsonData && !gptData) return 0;

  let randomId: number;
  do {
   randomId = Math.floor(Math.random() * 1000000);
  } while (categories.some((category) => category.id === randomId));

  return randomId;
 };

 const addProduct = (product: ProductData, categoryId: number) => {
  if (gptData || jsonData || categories) {
   const targetCategory =
    gptData?.find((category) => category.id === categoryId) || jsonData?.find((category) => category.id === categoryId) || categories?.find((category) => category.id === categoryId);

   if (targetCategory) {
    const updatedCategory: CategoryData = {
     ...targetCategory,
     products: [...targetCategory.products, product],
    };

    if (gptData) {
     const updatedGptData = gptData.map((category) => (category.id === categoryId ? updatedCategory : category));
     setGptData(updatedGptData);
    } else if (jsonData) {
     const updatedJsonData = jsonData.map((category) => (category.id === categoryId ? updatedCategory : category));
     setJsonData(updatedJsonData);
    } else if (categories) {
     const updatedCategories = categories.map((category) => (category.id === categoryId ? updatedCategory : category));
     setCategories(updatedCategories);
    }
   } else {
    console.error(`Category with ID ${categoryId} not found.`);
   }
  } else {
   console.error("No data source available to add the product.");
  }
 };

const editProduct = (product: ProductData, categoryId: number) => {
 if (gptData || jsonData || categories) {
  const targetCategory =
   gptData?.find((category) => category.id === categoryId) || jsonData?.find((category) => category.id === categoryId) || categories?.find((category) => category.id === categoryId);

  if (targetCategory) {
   const updatedCategory: CategoryData = {
    ...targetCategory,
    products: targetCategory.products.map((p) => (p.id === product.id ? { ...product } : p)),
   };

   if (gptData) {
    const updatedGptData = gptData.map((category) => (category.id === categoryId ? updatedCategory : category));
    setGptData(updatedGptData);
   } else if (jsonData) {
    const updatedJsonData = jsonData.map((category) => (category.id === categoryId ? updatedCategory : category));
    setJsonData(updatedJsonData);
   } else if (categories) {
    const updatedCategories = categories.map((category) => (category.id === categoryId ? updatedCategory : category));
    setCategories(updatedCategories);
   }
  } else {
   console.error(`Category with ID ${categoryId} not found.`);
  }
 } else {
  console.error("No data source available to edit the product.");
 }
};

const deleteProduct = (productId: number, categoryId: number) => {
 if (gptData || jsonData || categories) {
  const targetCategory =
   gptData?.find((category) => category.id === categoryId) || jsonData?.find((category) => category.id === categoryId) || categories?.find((category) => category.id === categoryId);

  if (targetCategory) {
   const updatedProducts = targetCategory.products.filter((product) => product.id !== productId);

   const updatedCategory: CategoryData = {
    ...targetCategory,
    products: updatedProducts,
   };

   if (gptData) {
    const updatedGptData = gptData.map((category) => (category.id === categoryId ? updatedCategory : category));
    setGptData(updatedGptData);
   } else if (jsonData) {
    const updatedJsonData = jsonData.map((category) => (category.id === categoryId ? updatedCategory : category));
    setJsonData(updatedJsonData);
   } else if (categories) {
    const updatedCategories = categories.map((category) => (category.id === categoryId ? updatedCategory : category));
    setCategories(updatedCategories);
   }
  } else {
   console.error(`Category with ID ${categoryId} not found.`);
  }
 } else {
  console.error("No data source available to delete the product.");
 }
};


 const handleToggleRoleChange = (id: number) => {
  setUsers((users) =>
   users.map((user) => {
    return user.id === id ? { ...user, role: toggleRole(user) } : user;
   }),
  );
 };

 const changeModal = (element: string) => {
  setCurrentModal(element);
 };

 const getEmbedYTLink = (ytLink: string): string => {
  const url = new URL(ytLink);
  const ytId = url.searchParams.get("v");
  if (!ytId) {
   throw new Error("Not correct yt link");
  }
  return `https://www.youtube.com/embed/${ytId}`;
 };

 const saveLoggedUserRole = (string: string) => {
  if (!string) return;
  setLoggedUserRole(string);
 };

 const saveLoggedUserEmail = (string: string) => {
  if (!string) return;
  setLoggedUserEmail(string);
 };

 const clearLoggedUserRole = () => {
  setLoggedUserRole("");
 };
 const clearLoggedUserEmail = () => {
  setLoggedUserEmail("");
 };

 const handleModalOpen = () => setIsModalOpen(true);

 const handleModalClose = () => setIsModalOpen(false);

 return {
  isModalOpen,
  currentModal,
  categories,
  jsonData,
  gptData,
  users,
  loggedUserRole,
  loggedUserEmail,
  findCategoryId,
  findFreeCategoryId,
  addCategory,
  editCategory,
  deleteCategory,
  findFreeProductId,
  addProduct,
  editProduct,
  deleteProduct,
  setJsonData,
  changeModal,
  handleModalOpen,
  handleModalClose,
  handleToggleRoleChange,
  getEmbedYTLink,
  setUsers,
  saveLoggedUserRole,
  saveLoggedUserEmail,
  clearLoggedUserRole,
  clearLoggedUserEmail,
 };
};

export const useOrderAiContext = () => {
 return useContext(OrderAiContext);
};
