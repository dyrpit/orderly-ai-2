import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const StyledAdminContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "800px",
  borderRadius: "16px",
  [theme.breakpoints.down("laptop")]: {
    width: "100vw",
  }
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  color: "#fff",
  fontWeight: theme.typography.fontWeightBold,

}));
export const StyledGridContainer = styled(Grid)({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "24px",
  [theme.breakpoints.down("laptop")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    margin: "0"
  }
});

export const StyledGridItemCentered = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px"
});

