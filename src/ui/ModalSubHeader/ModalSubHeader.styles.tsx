import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalSubHeader = styled(Typography)(({ theme: theme }) => ({
 maxWidth: "288px",
 width: "100%",
 height: "20px",
 color: theme.palette.text.secondary,
 textAlign: "center",
 padding: "0px 0px 30px 0px",
 margin: "auto",
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightMedium,
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
