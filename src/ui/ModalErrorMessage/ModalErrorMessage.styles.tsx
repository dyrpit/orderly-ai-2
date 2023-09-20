import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalErrorMessage = styled(Typography)(({ theme: theme }) => ({
 width: "512px",
 height: "30px",
 fontSize: "12px",
 marginLeft: "20%",
 marginTop: "-20px",
 color: "red",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
