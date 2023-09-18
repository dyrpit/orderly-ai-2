import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalInput = styled(TextField)(({ theme: theme }) => ({
 width: "512px",
 height: "60px",
 borderRadius: "14px",
 background: theme.palette.info.dark,
 display: "flex",
 margin: "auto",
 marginBottom: "30px",
 justifyContent: "center",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
 "& input": {
  width: "472px",
  overflow: "hidden",
  [theme.breakpoints.down("tablet")]: {
   width: "100%",
  },
 },
 "& fieldset": {
  border: "none",
 },
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
  "& input": {
   width: "100%",
  },
 },
}));
