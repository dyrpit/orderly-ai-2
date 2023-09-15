import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RegisterModalContainer = styled(Box)(({ theme: theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  width: "828px",
  height: "579px",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));
