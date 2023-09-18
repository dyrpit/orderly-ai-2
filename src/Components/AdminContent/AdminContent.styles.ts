import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../Theme/ThemeProvider";

export const StyledAdminContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  padding: '36px',
  [theme.breakpoints.down("laptop")]: {
    padding: "8px"
  }
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  color: "#fff",
  fontWeight: theme.typography.fontWeightBold,
  [theme.breakpoints.down("laptop")]: {
    fontSize: "40px"
  }

}));
export const StyledGridContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("tablet")]: {
    display: "flex",
    flexDirection: "column",

  }
});

