import { useContext, useState } from "react";
import { OrderAiContext } from "./ContextProvider";

export const useOrderAi = () => {
 // Login/Sign In/Admin Panel
 const [showButtons, setShowButtons] = useState("none");

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

 const [isModalOpen, setIsModalOpen] = useState(false);
 const handleSignInClick = () => {
  setIsModalOpen(true);
  changeModal("Sign In");
  if (isModalOpen === true) {
   setIsModalOpen(false);
   changeModal("none");
  }
 };

 const [currentModal, setCurrentModal] = useState("none");
 const changeModal = (element: string) => {
  setCurrentModal(element);
 };
 return {
  showButtons,
  showHideLoginButtons,
  isModalOpen,
  handleSignInClick,
  currentModal,
  changeModal,
 };
};

export const useOrderAiContext = () => {
 return useContext(OrderAiContext);
};
