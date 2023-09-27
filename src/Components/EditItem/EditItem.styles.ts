import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

export const StyledAdminContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  padding: "30px",
  marginBottom: "30px",
  [theme.breakpoints.down("laptop")]: {
    margin: "8px",
    marginBottom: "30px",
  },
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
  [theme.breakpoints.down("laptop")]: {
    fontSize: "40px",
  },
}));

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("tablet")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const StyledVideoContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  height: "200px",
  margin: "10px auto",
}));

export const StyledVideoPreview = styled("div")({
  height: "200px",
  display: "flex",
  width: "100%",
  borderRadius: "20px",
  border: "2px solid #fff",
});
