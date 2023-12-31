import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalFooter = styled(Typography)(({ theme: theme }) => ({
 maxWidth: "768px",
 width: "100%",
 height: "32px",
 textAlign: "center",
 margin: "auto",
 color: theme.palette.text.secondary,
 fontSize: theme.typography.fontSize,
 padding: "30px 0px 30px 0px",
 "& a": {
  color: theme.palette.text.primary,
  textDecoration: "none",
  cursor: "pointer",
 },
}));
