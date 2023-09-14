import { Box, Button, TextField, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";

export const ANContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.paper,
 width: "310px",
 height: "100%",
 padding: "30px 0 30px 0",
}));

export const ANContent = styled(Typography)(({ theme: theme }) => ({
 width: "100%",
 display: "flex",
 flexDirection: "column",
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightMedium,
}));

export const ANList = styled(List)(({ theme: theme }) => ({
 width: "100%",
 display: "flex",
 paddingLeft: "30px",
 flexDirection: "column",
 color: fontSizeVar.loginModalDefault,
}));

export const ANListItem = styled(ListItem)(({ theme: theme }) => ({}))

export const ANListItemButton = styled(ListItemButton)(({ theme: theme }) => ({}));
export const ANListItemIcon = styled(ListItemIcon)(({ theme: theme }) => ({}));
export const ANListItemText = styled(ListItemText)(({ theme: theme }) => ({}));


export const ANButton = styled(Button)(({ theme: theme }) => ({
 width: "200px",
 height: "60px",
 borderRadius: "15px",
 backgroundColor: theme.palette.info.main,
 display: "flex",
 margin: "auto",
 color: fontSizeVar.loginModalDefault,
 "&:hover": {
  backgroundColor: theme.palette.info.dark,
 },
}));
