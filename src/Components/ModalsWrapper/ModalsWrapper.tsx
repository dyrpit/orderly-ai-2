import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { LoginModal, RegisterModal } from "..";
import { ImportModal } from "../ImportModal/ImportModal";

export function ModalsWrapper() {
 const { currentModal } = useContext(OrderAiContext);

 return (
  <>
    <>
     {currentModal === "Sign In" && <LoginModal />}
     {currentModal === "Sign Up" && <RegisterModal />}
     {currentModal === "Import" && <ImportModal />}
    </>
  </>
 );
}
