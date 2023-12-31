import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AdminNavbarListContainer = styled(Box)(() => ({
 padding: "0px 0 10px 0",
 maxWidth: "200px",
 margin: "0px",
}));

export const ANTitleContainer = styled(Box)(({ theme }) => ({
 fontSize: "18px",
 width: "100%",
 border: "none",
 color: theme.palette.common.white,
 display: "flex",
 alignItems: "center",
 padding: "0",
 borderRadius: "0.5em",
 cursor: "pointer",
}));

export const ANTitle = styled(Typography)(({ theme }) => ({
 cursor: "pointer",
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightLight,
 color: theme.palette.text.primary,
 textAlign: "left",
 "&:hover": {
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
 },
 "&.active": {
  color: "turquoise",
 },
}));

export const ANArrow = styled("span")(() => ({
 borderLeft: "8px solid transparent",
 borderRight: "8px solid transparent",
 borderTop: "10px solid #fff",
 transition: "transform ease-in-out 0.3s",
 transform: "rotate(-90deg)",
 "&.active": {
  transform: "rotate(0deg)",
  color: "turquoise",
 },
}));

export const ANList = styled(List)(() => ({
 paddingLeft: "20px",
 margin: "0px",
}));

export const ANListItemContainer = styled(Typography)(({ theme }) => ({
 fontSize: theme.typography.fontSize,
 fontWeight: theme.typography.fontWeightLight,
}));

export const ANListItem = styled(ListItem)(() => ({
 cursor: "pointer",
 padding: "4px 8px 4px 8px",
}));
