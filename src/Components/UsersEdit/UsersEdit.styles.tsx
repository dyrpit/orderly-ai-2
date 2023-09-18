import { Box, Checkbox, FormControlLabel, List, ListItem, Typography, styled } from "@mui/material";
import { fontSizeVar } from "../../Theme/variables";

export const UsersEditContainer = styled(Box)(({ theme: theme }) => ({
 width: "100%",
 height: "100%",
 maxHeight: "880px",
 backgroundColor: theme.palette.background.paper,
 borderRadius: "15px",
 padding: "30px",
}));

export const UsersEditList = styled(List)(() => ({
 width: "100%",
 display: "flex",
 flexDirection: "column",
 maxHeight: "100vh",
 overflow: "auto",
 color: fontSizeVar.loginModalDefault,
}));

export const UsersEditListItem = styled(ListItem)(() => ({
 flexDirection: "column",
 alignItems: "flex-start",
 width: "100%",
}));

export const UsersEditListRow = styled(Typography)(({ theme : theme }) => ({
 display: "flex",
 flexDirection: "row",
 justifyContent: "space-between",
 alignItems: "center", // Vertically center-align items
 width: "100%",
}));

export const UsersEditCheckbox = styled(FormControlLabel)(({}) => ({
 alignSelf: "flex-end", // Stick the checkbox to the right
 width: "100%",
}));
