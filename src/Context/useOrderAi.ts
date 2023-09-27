import { useContext, useEffect, useState } from "react";
import { OrderAiContext } from "./ContextProvider";
import { CategoryData, User } from "./types";
import { fetchDataAndSetState, toggleRole } from "./utils";
import useDecrypt from "../Hooks/useDecrypt";

export const useOrderAi = () => {
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
    setLoggedUserRole('');
  };
  const clearLoggedUserEmail = () => {
    setLoggedUserEmail('');
  };

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return {
    isModalOpen,
    currentModal,
    categories,
    users,
    jsonData,
    loggedUserRole,
    loggedUserEmail,
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