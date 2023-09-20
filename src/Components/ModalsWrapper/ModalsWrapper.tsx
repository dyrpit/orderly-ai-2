import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { LoginModal, RegisterModal } from "..";

export function ModalsWrapper() {
 const { isModalOpen, currentModal } = useContext(OrderAiContext);

 return (
  <>
   {isModalOpen && (
    <>
     {currentModal === "Sign In" && <LoginModal />}
     {currentModal === "Sign Up" && <RegisterModal />}
    </>
   )}
  </>
 );
}
