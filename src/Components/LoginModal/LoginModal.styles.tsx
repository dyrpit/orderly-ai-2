import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginModalContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.default,
 maxWidth: "828px",
 width: "100%",
 height: "500px",
 margin: "0 auto",
 justifyContent: "center",
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 "& form": {
  width: "100%",
 },
 [theme.breakpoints.down("tablet")]: {
  justifyContent: "initial",
  height: "100%",
 },
}));
