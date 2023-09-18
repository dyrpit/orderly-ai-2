import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fontSizeVar } from "../../Theme/variables";
import { StyledButton } from "../../ui";

export const ANContainer = styled(Box)(({ theme: theme }) => ({
 backgroundColor: theme.palette.background.paper,
 width: "100%",
 maxWidth: "300px",
 height: "100%",
 maxHeight: "880px",
 padding: "30px 0 30px 0",
 display: "flex",
 flexDirection: "column",
 gap: "20px",
 alignItems: "center", // Center items vertically
 textAlign: "center",
 borderRadius: "15px",
}));

export const ANList = styled(List)(() => ({
 width: "100%",
 maxWidth: "200px",
 display: "flex",
 flexDirection: "column",
 maxHeight: "100vh",
 overflow: "auto",
 color: fontSizeVar.loginModalDefault,
}));

export const ANListItem = styled(ListItem)(() => ({
 flexDirection: "column",
}));

export const ANListItemIcon = styled(ListItemIcon)(({ }) => ({}));
export const ANListItemText = styled(ListItemText)(({ }) => ({}));

export const ANButton = styled(StyledButton)(({ }) => ({
 margin: "0",
}));

export const ANCategoryDiv = styled("div")(({ }) => ({
 display: "flex",
 flexDirection: "row",
}));
