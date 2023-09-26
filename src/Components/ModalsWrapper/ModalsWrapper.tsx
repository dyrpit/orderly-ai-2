import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import { LoginModal, RegisterModal } from "..";
import { ImportModal } from "../ImportModal/ImportModal";
import { ExportModal } from "../ExportModal/ExportModal";

export function ModalsWrapper() {
 const { isModalOpen, currentModal } = useContext(OrderAiContext);

 return (
  <>
   {isModalOpen && (
    <>
     {currentModal === "Sign In" && <LoginModal />}
     {currentModal === "Sign Up" && <RegisterModal />}
     {currentModal === "Import" && <ImportModal />}
     {currentModal === "Export" && <ExportModal/>}
    </>
   )}
  </>
 );
}