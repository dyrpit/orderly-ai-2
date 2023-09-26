import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalErrorMessage = styled(Box)(({ theme: theme }) => ({
 maxWidth: "512px",
 width: "100%",
 height: "30px",
 fontSize: "12px",
 marginLeft: "20%",
 marginTop: "-20px",
 color: "red",
 fontFamily: "Montserrat",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
