import { useContext, useState } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { ImportExportContainer } from "../../ui";

export function ExportModal() {
 const { handleModalClose, isModalOpen, gptData, jsonData, categories } = useContext(OrderAiContext);
 const [exportedData, setExportedData] = useState<string | null>(null);

 const exportToJson = () => {
  const dataToExport = gptData || jsonData || categories || {};
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
   <ImportExportContainer>
    {exportedData ? (
     <div>
      <a href={exportedData} download="exported_data.json">
       <Button variant="contained" sx={{ backgroundColor: "#5C358E" }}>
        Download JSON
       </Button>
      </a>
      <Button variant="contained" onClick={resetExportedData}>
       Close
      </Button>
     </div>
    ) : (
     <Button variant="contained" onClick={exportToJson} sx={{ backgroundColor: "#5C358E" }}>
      Export to JSON
     </Button>
    )}
   </ImportExportContainer>
  </Modal>
 );
}
