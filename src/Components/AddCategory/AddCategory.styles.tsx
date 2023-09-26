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

export const ColorsGrid = styled("div")({
 display: "flex",
 flexDirection: "row",
 flexWrap: "wrap",
 gap: "20px",
 justifyContent: "center",
 overflowY: "scroll",
 paddingTop: "20px",
 maxHeight: "200px",
});

export const ColorCircle = styled("div")({
 width: "60px",
 height: "60px",
 borderRadius: "50%",
 border: "2px solid #fff",
 cursor: "pointer",
 transition: "transform 0.2s ease-in-out, border-radius 0.2s ease",
 "&:hover": {
  transform: "scale(1.1)",
 },
 "&.selected": {
  borderRadius: "25%",
  transform: "scale(1.1)",
 },
});

export const StyledImageContainer = styled("div")({
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 maxWidth: "100%",
 height: "260px",
 margin: "10px auto",
});

export const StyledImage = styled("img")({
 width: "auto",
 maxWidth: "100%",
 height: "auto",
 maxHeight: "100%",
 display: "block",
 margin: "10px auto",
 borderRadius: "10px",
 border: "2px solid #fff",
});

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

export const StyledPreviewText = styled(Typography)({
 color: "#666",
 variant: "subtitle2",
});


export const StyledColorsGridTitle = styled("div")({ display: "flex", justifyContent: "space-between", width: "100%" });

export const StyledColorsGridImage = styled("img")({ height: "20px", paddingRight: "10px", cursor: "pointer" });
