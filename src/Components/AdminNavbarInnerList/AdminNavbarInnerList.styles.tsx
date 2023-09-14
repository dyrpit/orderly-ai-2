import { Box, Button, TextField, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar, colorVar } from "../../Theme/variables";

export const ANInnerList = styled(List)(({ theme: theme }) => ({}));

export const ANInnerListItem = styled(ListItem)(({ theme: theme }) => ({}));

export const ANInnerListItemCategory = styled("div")(({ theme: theme }) => ({
    display: "flex",
    flexDirection: "row",
    paddingLeft: "30px"
}));

export const ANListItemText = styled(ListItemText)(({ theme: theme }) => ({}));


export const ANArrow = styled("span")(({ theme: theme }) => ({
 width: "12px",
 height: "12px",
 display: "block",
 borderStyle: "solid",
 borderWidth: "0px 1px 1px 0px",
 transform: "rotate(-45deg)",
 marginRight: "30px",
 position: "relative",
 color: colorVar.textColor,
 cursor: "pointer",
 top: "10px",
 transition: "transform 0.7s ease, width 0.7s ease, height 0.7s ease, top 0.7s ease",
 "& .active": {
  transform: "rotate(45deg)",
 },
}));
