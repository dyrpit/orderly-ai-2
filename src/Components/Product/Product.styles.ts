import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProductContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  padding: '24px',
  minHeight: "35%",
  marginBottom: "24px",
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
  },
  [theme.breakpoints.down("tablet")]: {
    fontSize: "36px"
  }
}));

export const StyledTextBox = styled(Box)({
  width: "45%",
  padding: "8px",
});

export const StyledDescriptionBox = styled(Box)({
  width: "100%",
  padding: "8px",
  minHeight: "140px",
  maxHeight: "140px",
  overflowY: "auto",
});

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "24px",
  fontWeight: theme.typography.fontWeightMedium,
  padding: "0",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("tablet")]: {
    fontSize: "16px"
  }
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "24px",
  fontWeight: theme.typography.fontWeightRegular,
  padding: "0",
  lineHeight: "1.2",
  color: theme.palette.text.primary,
  textAlign: "justify",
  [theme.breakpoints.down("tablet")]: {
    fontSize: "16px",
    paddingRight: "8px",
  }
}));
