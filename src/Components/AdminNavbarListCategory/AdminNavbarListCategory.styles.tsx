import { Box, Button, TextField, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar, colorVar } from "../../Theme/variables";

export const AdminNavbarListContainer = styled(Box)(({ theme: theme }) => ({
 padding: "0px 0 10px 0",
 maxWidth: "200px",
 margin: "0px",
}));

export const ANTitleContainer = styled(Box)(({ theme: theme }) => ({
 display: "flex",
 flexDirection: "row",
 fontSize: fontSizeVar.loginModalDefault,
}));

export const ANTitle = styled(Typography)(({ theme: theme }) => ({
 cursor: "pointer",
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightLight,
 color: fontSizeVar.loginModalDefault,
}));

export const ANArrow = styled("span")(({ theme: theme }) => ({
 width: "10px",
 height: "10px",
 display: "block",
 borderStyle: "solid",
 borderWidth: "0px 1px 1px 0px",
 transform: "rotate(-45deg)",
 marginRight: "20px",
 marginLeft: "5px",
 position: "relative",
 color: colorVar.textColor,
 cursor: "pointer",
 top: "7px",
 left: "0px",
 transition: "transform 0.7s ease, width 0.7s ease, left 0.7s ease, top 0.7s ease",
 "&.active": {
  transform: "rotate(45deg)",
  top: "4px",
  left: "4px",
  transition: "transform 0.7s ease, width 0.7s ease, left 0.7s ease, top 0.7s ease",
 },
}));

export const ANList = styled(List)(({ theme: theme }) => ({
 paddingLeft: "20px",
 margin: "0px",
}));

export const ANListItemContainer = styled(Typography)(({ theme: theme }) => ({
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightLight,
 color: fontSizeVar.loginModalDefault,
}));

export const ANListItem = styled(ListItem)(({ theme: theme }) => ({
 cursor: "pointer",
}));
