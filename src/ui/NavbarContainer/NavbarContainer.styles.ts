import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNavBarContainer = styled(Box)(({ theme }) => ({
  width: "1170px",
  maxWidth: "1170px",
  height: "70px",
  backgroundColor: theme.palette.background.paper,
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
}));

export const NavbarContainerWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center"
}));
