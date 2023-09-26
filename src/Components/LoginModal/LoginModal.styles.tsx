import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginModalContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.default,
 maxWidth: "828px",
 width: "100%",
 height: "620px",
 margin: "0 auto",
 "& form": {
  width: "100%",
 },
}));
