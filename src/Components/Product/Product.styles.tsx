import { Box, Typography } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const StyledProductContainer = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.background.paper,
 borderRadius: "16px",
 minHeight: "35%",
 marginBottom: "24px",
 width: "100%",
 boxSizing: "border-box",
 [theme.breakpoints.down("laptop")]: {
  // padding: "8px"
 },
}));

export const StyledName = styled(Typography)(({ theme }) => ({
 fontSize: "40px",
 color: "#fff",
 fontWeight: theme.typography.fontWeightBold,
 textOverflow: "ellipsis",
 whiteSpace: "nowrap",
 overflow: "hidden",
 textAlign: "center",
 [theme.breakpoints.down("laptop")]: {
  fontSize: "40px",
 },
 [theme.breakpoints.down("tablet")]: {
  fontSize: "24px",
 },
}));

export const StyledTextBox = styled(Box)(({ theme }) => ({
 width: "45%",
 padding: "8px",
 [theme.breakpoints.down("tablet")]: {
  width: "100%",
  padding: "8px",
 },
}));

export const StyledDescriptionBox = styled(Box)({
 width: "100%",
 padding: "8px",
 minHeight: "140px",
 maxHeight: "140px",
 overflowY: "hidden",
});

export const StyledTitle = styled(Typography)(({ theme }) => ({
 fontFamily: theme.typography.fontFamily,
 fontSize: "24px",
 fontWeight: theme.typography.fontWeightMedium,
 padding: "0",
 color: theme.palette.text.primary,
 [theme.breakpoints.down("tablet")]: {
  fontSize: "16px",
 },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
 fontFamily: theme.typography.fontFamily,
 fontSize: "24px",
 fontWeight: theme.typography.fontWeightRegular,
 padding: "0",
 lineHeight: "1.2",
 color: theme.palette.text.primary,
 [theme.breakpoints.down("tablet")]: {
  fontSize: "16px",
  paddingRight: "8px",
 },
}));

export const StyledLinkText = styled(Typography)(({ theme }) => ({
 maxWidth: "90%",
 fontSize: "24px",
 color: theme.palette.text.primary,
 fontFamily: theme.typography.fontFamily,
 fontWeight: theme.typography.fontWeightRegular,
 padding: "0",
 lineHeight: "1.2",
 [theme.breakpoints.down("laptop")]: {
  fontSize: "16px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textAlign: "justify",
 },
}));

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
 [`& .${tooltipClasses.tooltip}`]: {
  backgroundColor: "#7C5DA4",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[1],
  fontSize: 16,
  margin: 0,
  width: "100%",
 },
}));

export const StyledNameTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
 [`& .${tooltipClasses.tooltip}`]: {
  backgroundColor: "#7C5DA4",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[1],
  fontSize: 24,
  margin: 0,
  width: "100%",
 },
}));
