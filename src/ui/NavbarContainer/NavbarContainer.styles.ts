import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNavBarContainer = styled(AppBar)(({ theme }) => ({
  width: "100%",
  height: "70px",
  backgroundColor: theme.palette.background.paper,
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down('laptop')]: {
    maxWidth: "100%"
  },
}));