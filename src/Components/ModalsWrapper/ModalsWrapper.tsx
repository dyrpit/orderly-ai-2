import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { LoginModal, RegisterModal } from "..";

export function ModalsWrapper() {
 const { currentModal } = useContext(OrderAiContext);

 return (
  <>
   {currentModal === "Sign In" && <LoginModal />}
   {currentModal === "Sign Up" && <RegisterModal />}
  </>
 );
}
