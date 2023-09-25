import { useContext, useState } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";
import { ExportModalContainer } from "./ExportModal.style";

export function ExportModal() {
  const { handleModalClose, isModalOpen, jsonData, categories } = useContext(OrderAiContext);
  const [exportedData, setExportedData] = useState<string | null>(null);

  const exportToJson = () => {
    const dataToExport = jsonData || categories || {}; 
    const jsonDataString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonDataString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    setExportedData(url);
  };

  const resetExportedData = () => {
    setExportedData(null);
  };

  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <ExportModalContainer>
        {exportedData ? (
          <div>
            <a href={exportedData} download="exported_data.json">
              Pobierz dane JSON
            </a>
            <button onClick={resetExportedData}>Zamknij</button>
          </div>
        ) : (
          <button onClick={exportToJson}>Eksportuj dane do JSON</button>
        )}
      </ExportModalContainer>
    </Modal>
  );
}
