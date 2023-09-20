import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LoginModalContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.default,
 width: "828px",
 height: "620px",
 margin: "0 auto",
 "& form": {
  width: "100%",
 },
}));
