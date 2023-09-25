import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const StyledAdminContentContainer = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.paper,
 borderRadius: "16px",
 padding: "36px",
 [theme.breakpoints.down("laptop")]: {
  padding: "8px",
 },
}));

export const StyledName = styled(Typography)(({ theme }) => ({
 fontSize: "60px",
 color: "#fff",
 fontWeight: theme.typography.fontWeightBold,
 [theme.breakpoints.down("laptop")]: {
  fontSize: "40px",
 },
}));

export const StyledGridContainer = styled(Grid)({
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 [theme.breakpoints.down("tablet")]: {
  display: "flex",
  flexDirection: "column",
 },
});

export const StyledImageContainer = styled("div")(({}) => ({
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 maxWidth: "100%",
 height: "260px",
 margin: "10px auto",
}));

export const StyledImagePreview = styled("div")({
 height: "260px",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 width: "100%",
 margin: "10px auto",
 borderRadius: "10px",
 border: "2px solid #fff",
});
