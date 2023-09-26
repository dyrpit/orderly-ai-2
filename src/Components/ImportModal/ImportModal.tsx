import { useContext, ChangeEvent } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { ImportExportContainer } from "../../ui";

export function ImportModal() {
 const { handleModalClose, isModalOpen, setJsonData } = useContext(OrderAiContext);

 const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  const file = event.target?.files?.[0];

  if (file) {
   const reader = new FileReader();
   reader.onload = (e) => {
    try {
     const data = JSON.parse(e.target?.result as string);
     setJsonData(data);
     alert("Uploaded successfuly!");
    } catch (error) {
     console.error("Błąd parsowania pliku JSON:", error);
    }
   };
   reader.readAsText(file);
  }
 };

 return (
  <Modal open={isModalOpen} onClose={handleModalClose}>
   <ImportExportContainer>
    <Button variant="contained" component="label" sx={{ backgroundColor: "#5C358E" }}>
     Upload File
     <input type="file" hidden onChange={handleFileChange} accept=".json" />
    </Button>
   </ImportExportContainer>
  </Modal>
 );
}
