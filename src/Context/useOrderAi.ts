import { useContext, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { CategoryData, User } from "./types";
import { fetchDataAndSetState } from "./utils";

export const useOrderAi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState("none");
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
   users,
   showHideLoginButtons,
   changeModal,
   handleCategoryChange,
   handleItemChange,
   handleUserChange,
   handleModalOpen,
   handleModalClose,
  };
};

export const useOrderAiContext = () => {
  return useContext(OrderAiContext);
};
