import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RegisterModalContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.default,
 display: "flex",
 flexDirection: "column",
 width: "828px",
 height: "779px",
 margin: "0 auto",
 justifyContent: "center",
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 [theme.breakpoints.down("tablet")]: {
  maxWidth: "100%",
  justifyContent: "initial",
  height: "100%",
 },
}));
