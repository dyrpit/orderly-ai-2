import { Box, styled } from "@mui/material";


export const UsersEditContainer = styled(Box)(({ theme: theme }) => ({
 width: "100%",
 height: "100%",
 maxHeight: "880px",
 backgroundColor: theme.palette.background.paper,
 borderRadius: "15px",
 padding: "30px"
}));