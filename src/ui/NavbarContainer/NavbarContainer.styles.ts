import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNavBarContainer = styled(AppBar)(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));