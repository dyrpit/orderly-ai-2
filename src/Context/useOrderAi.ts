import { useContext, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { CategoryData, User } from "./types";
import { fetchDataAndSetState } from "./utils";
import { toggleRole } from "./utils";

export const useOrderAi = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [currentModal, setCurrentModal] = useState("none");
 const [categories, setCategories] = useState<CategoryData[]>([]);
 const [users, setUsers] = useState<User[]>([]);

 fetchDataAndSetState("/src/Data/categories.json", setCategories);
 fetchDataAndSetState("/src/Data/users.json", setUsers);

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
