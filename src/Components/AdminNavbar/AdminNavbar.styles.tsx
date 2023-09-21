import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";
import { StyledButton } from "../../ui";

export const ANContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.paper,
 width: "100%",
 maxWidth: "300px",
 height: `calc(100vh - 250px)`,
 maxHeight: "100%",
 padding: "30px 0 30px 0",
 display: "flex",
 flexDirection: "column",
 gap: "20px",
 alignItems: "center", // Center items vertically
 textAlign: "center",
 borderRadius: "15px",
 [theme.breakpoints.down("laptop")]: {
  display: "none",
 },
}));

export const ANList = styled(List)(() => ({
 width: "100%",
 maxWidth: "200px",
 display: "flex",
 flexDirection: "column",
 maxHeight: "100vh",
 overflow: "auto",
 color: fontSizeVar.loginModalDefault,
 listStyle: "none",
 scrollbarColor: "transparent transparent",
 scrollbarWidth: "thin",

 // Hide the scrollbar thumb and track in Webkit browsers
 "&::-webkit-scrollbar": {
  width: "8px", // Adjust the width as needed
 },
 "&::-webkit-scrollbar-thumb": {
  background: "transparent", // Hide the thumb
 },
 "&::-webkit-scrollbar-track": {
  background: "transparent", // Hide the track
 },
}));

export const ANListItem = styled(ListItem)(() => ({
 display: "flex",
 background: "#2f3238",
 borderRadius: "0.5em",
 position: "relative",
 left: "-100%", // Initial state, off-screen to the left
 transition: "left 0.5s ease-in-out", // Add transition for left property
 transitionDelay: "calc(60ms * var(--delay))",
}));

export const ANListItemIcon = styled(ListItemIcon)(({}) => ({}));
export const ANListItemText = styled(ListItemText)(({}) => ({}));

export const ANButton = styled(StyledButton)(({}) => ({
 margin: "0",
 height: "60px",
 width: "200px",
}));

export const ANCategoryDiv = styled("div")(({}) => ({
 display: "flex",
 flexDirection: "row",
}));
