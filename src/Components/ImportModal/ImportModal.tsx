import React, { useContext, useState, ChangeEvent } from "react";
import { ImportModalContainer } from "./ImportModal.style";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";

export function ImportModal() {
  const { changeModal, handleModalClose, isModalOpen, setJsonData } = useContext(OrderAiContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result as string);
          setJsonData(data); 
        } catch (error) {
          console.error("Błąd parsowania pliku JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <ImportModalContainer>
        <input type="file" onChange={handleFileChange} accept=".json" />
      </ImportModalContainer>
    </Modal>
  );
}
