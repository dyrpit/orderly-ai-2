import { Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";
import { StyledButton } from "../../ui";

export const ANContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.paper,
 width: "100%",
 maxWidth: "300px",
 height: `698px`,
 padding: "30px 0 30px 0",
 marginBottom: "30px",
 display: "flex",
 flexDirection: "column",
 gap: "20px",
 alignItems: "center",
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
 scrollbarWidth: "thin",
 "&::-webkit-scrollbar": {
  width: "6px",
  height: "6px",
 },
 "&::-webkit-scrollbar-track ": {
  borderRadius: "10px",
  background: "rgba(0,0,0,0.1)",
 },
 "&::-webkit-scrollbar-thumb": {
  borderRadius: "10px",
  background: "rgba(0,0,0,0.2)",
 },
 "&::-webkit-scrollbar-thumb:hover": {
  background: "rgba(0,0,0,0.4)",
 },
 "&::-webkit-scrollbar-thumb:active": {
  background: " rgba(0,0,0,.9)",
 },
}));

export const ANListItem = styled(ListItem)(() => ({
 display: "flex",
 background: "#2f3238",
 borderRadius: "0.5em",
 position: "relative",
 left: "-100%",
 transition: "left 0.5s ease-in-out",
 transitionDelay: "calc(60ms * var(--delay))",
}));

export const ANButton = styled(StyledButton)(({}) => ({
 margin: "0",
 height: "60px",
 width: "200px",
}));

export const ANButtonSmall = styled(ANButton)(({}) => ({
 width: "100%",
 height: "fit-content",
 margin: "0 auto 20px auto",
 fontSize: "12px",
}));

export const ANCategoryDiv = styled("div")(({}) => ({
 display: "flex",
 flexDirection: "row",
}));
