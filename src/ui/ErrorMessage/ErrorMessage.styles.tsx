import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ErrorMessage = styled(Box)(({ theme: theme }) => ({
 width: "512px",
 height: "12px",
 fontSize: "12px",
 color: "red",
 fontFamily: "Montserrat",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
