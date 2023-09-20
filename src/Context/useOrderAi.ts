import { useContext, useEffect, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { Category, Item, User } from "./types";

export const useOrderAi = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [showButtons, setShowButtons] = useState("none");
 const [currentModal, setCurrentModal] = useState("none");
 const [categories, setCategories] = useState<Category[]>([]);
 const [items, setItems] = useState<Item[]>([]);
 const [users, setUsers] = useState<User[]>([]);
 const [editUsersVisible, setEditUserVisible] = useState(false);

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
  fetch("/src/Data/items.json")
   .then((response) => response.json())
   .then((data) => {
    setItems(data.items);
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

 const showHideLoginButtons = () => {
  if (showButtons === "none") {
   setShowButtons("block");
   changeModal("none");
  } else {
   setShowButtons("none");
   changeModal("none");
  }
 };

 const changeModal = (element: string) => {
  setCurrentModal(element);
 };

 const handleEditUserVisible = () => {
  setEditUserVisible(!editUsersVisible);
 };

 const handleModalOpen = () => {
  setIsModalOpen(true);
  setShowButtons("none");
 };
 const handleModalClose = () => setIsModalOpen(false);

 return {
  isModalOpen,
  showButtons,
  currentModal,
  categories,
  items,
  users,
  editUsersVisible,
  showHideLoginButtons,
  changeModal,
  handleCategoryChange,
  handleItemChange,
  handleUserChange,
  handleEditUserVisible,
  handleModalOpen,
  handleModalClose,
 };
};

export const useOrderAiContext = () => {
 return useContext(OrderAiContext);
};
