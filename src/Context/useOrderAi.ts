import { useContext, useEffect, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { Category, ProductType, User } from "./types";
import { toggleRole } from "./utils";

export const useOrderAi = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [currentModal, setCurrentModal] = useState("none");
 const [categories, setCategories] = useState<Category[]>([]);
 const [products, setProducts] = useState<ProductType[]>([]);
 const [users, setUsers] = useState<User[]>([]);

 useEffect(() => {
  fetch("/src/Data/categories.json")
   .then((response) => response.json())
   .then((data) => {
    setCategories(data.categories);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 useEffect(() => {
  fetch("/src/Data/products.json")
   .then((response) => response.json())
   .then((data) => {
    setProducts(data.products);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 useEffect(() => {
  fetch("/src/Data/users.json")
   .then((response) => response.json())
   .then((data) => {
    setUsers(data.users);
   })
   .catch((error) => {
    console.error("Error fetching JSON data:", error);
   });
 }, []);

 const handleUserChange = () => {
  // Implement user data changes as needed
 };

 const handleItemChange = () => {
  // Implement item data changes as needed
 };

 const handleCategoryChange = () => {
  // Implement user data changes as needed
 };

 const changeModal = (element: string) => {
  setCurrentModal(element);
 };

 const handleModalOpen = () => setIsModalOpen(true);

 const handleModalClose = () => setIsModalOpen(false);

 return {
  isModalOpen,
  currentModal,
  categories,
  products,
  users,
  changeModal,
  handleCategoryChange,
  handleItemChange,
  handleUserChange,
  handleModalOpen,
  handleModalClose,
  setUsers,
 };
};

export const useOrderAiContext = () => {
 return useContext(OrderAiContext);
};
