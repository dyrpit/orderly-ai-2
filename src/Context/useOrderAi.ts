import { useContext, useEffect, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { Category, ProductType, User } from "./types";

export const useOrderAi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButtons, setShowButtons] = useState("none");
  const [currentModal, setCurrentModal] = useState("none");
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
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

  const showHideLoginButtons = () => {
    if (showButtons === "none") {
      setShowButtons("block");
      setIsModalOpen(false);
      changeModal("none");
    } else {
      setShowButtons("none");
      setIsModalOpen(false);
      changeModal("none");
    }
  };

  const handleSignInClick = () => {
    setIsModalOpen(true);
    changeModal("Sign In");
    if (isModalOpen === true) {
      setIsModalOpen(false);
      changeModal("none");
    }
  };

  const changeModal = (element: string) => {
    setCurrentModal(element);
  };

  const handleEditUserVisible = () => {
    setEditUserVisible(!editUsersVisible);
  };

  return {
    isModalOpen,
    showButtons,
    currentModal,
    categories,
    products,
    users,
    editUsersVisible,
    showHideLoginButtons,
    handleSignInClick,
    changeModal,
    handleCategoryChange,
    handleItemChange,
    handleUserChange,
    handleEditUserVisible,
  };
};

export const useOrderAiContext = () => {
  return useContext(OrderAiContext);
};
