import React, { useContext, useState, ChangeEvent } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";
import { ExportModalContainer } from "./ExportModal.style";
import img from "./No-Memes-15.jpg"

export function ExportModal() {
  const { changeModal, handleModalClose, isModalOpen } = useContext(OrderAiContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
  };

  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
        <ExportModalContainer><img src={img}></img></ExportModalContainer>
    </Modal>
  );
}
