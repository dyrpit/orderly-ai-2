import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ImportExportContainer = styled(Box)(({ theme: theme }) => ({
 display: "flex",
 justifyContent: "center",
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 [theme.breakpoints.down("laptop")]: {
  display: "none",
 },
}));
