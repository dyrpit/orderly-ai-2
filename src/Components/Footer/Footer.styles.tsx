import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterWrapper = styled(Box)(({ theme }) => ({
 display: "flex",
 justifyContent: "center",
 position: "relative",
 bottom: "0",
 width: "100%",
 backgroundColor: theme.palette.background.paper,
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.paper,
 width: "100%",
 maxWidth: "1170px",
 height: "70px",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
 },
 [theme.breakpoints.down("laptop")]: {
  width: "100%",
 },
}));

export const FooterContent = styled(Typography)(({ theme }) => ({
 color: theme.palette.common.white,
 display: "flex",
 justifyContent: "center",
 lineHeight: "70px",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
  fontSize: "14px",
 },
}));
