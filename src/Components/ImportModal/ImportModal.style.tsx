import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ImportModalContainer = styled(Box)(({ theme: theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "828px",
  height: "620px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
