import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNavBarIconsContainer = styled(Box)(({ theme }) => ({
  width: "168px",
  margin: "0 auto",
  height: "36px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down('laptop')]: {
    display: "none"
  },
}));

export const StyledIconButton = styled(IconButton)({
  width: "30%%",
  height: "100%",
  padding: "2px"
});

export const StyledLogoContainer = styled(Box)(({ theme }) => ({
  width: "140px",
  height: "100%",
  padding: "2px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down('laptop')]: {
    width: "110px"
  },
}));
