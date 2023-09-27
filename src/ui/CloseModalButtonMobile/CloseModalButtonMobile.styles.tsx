import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CloseModalButtonMobile = styled(Box)(({ theme: theme }) => ({
 display: "none",
 [theme.breakpoints.down("tablet")]: {
  display: "flex",
  justifyContent: "end",
 },
}));
