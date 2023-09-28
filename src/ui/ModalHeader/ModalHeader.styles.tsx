import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const ModalHeader = styled(Typography)(({ theme: theme }) => ({
 maxWidth: "278px",
 width: "100%",
 color: theme.palette.text.primary,
 fontSize: fontSizeVar.loginModalHeader,
 padding: "30px 0px 30px 0px",
 textAlign: "center",
 margin: "auto",
 fontWeight: theme.typography.fontWeightBold,
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
