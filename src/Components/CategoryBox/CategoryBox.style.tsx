import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const StyledCategoryBox = styled(Box)({
 height: "300px",
 borderRadius: "20px",
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 width: "100%",
});

export const StyledCategoryName = styled(Typography)(({ theme }) => ({
 color: theme.palette.common.white,
 fontWeight: theme.typography.fontWeightMedium,
 fontSize: "40px",
 textAlign: "center",
 width: "100%",
 maxWidth: "100%",
 textShadow: "1px 2px 1px black",
 textTransform: "uppercase",
 [theme.breakpoints.down("tablet")]: {
  fontSize: "16px",
 },
}));

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
 width: "100%",
 margin: "16px 0",
 [theme.breakpoints.down("laptop")]: {
  padding: "0px 16px",
 },
}));
