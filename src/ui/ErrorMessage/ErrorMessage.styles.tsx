import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ErrorMessage = styled(Typography)(({ theme: theme }) => ({
 width: "512px",
 height: "12px",
 fontSize: "12px",
 color: "red",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
}));
