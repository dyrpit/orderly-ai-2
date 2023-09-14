import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(({ theme: theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "1170px",
  height: "70px",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));

export const FooterContent = styled(Typography)(({ theme: theme }) => ({
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  lineHeight: "70px",
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
  },
}));
