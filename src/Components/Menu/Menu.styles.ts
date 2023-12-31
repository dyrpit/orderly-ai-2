import { Avatar, Box, Drawer, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const StyledMenu = styled(Box)(({ theme }) => ({
 width: "168px",
 margin: "0 auto",
 height: "36px",
 display: "flex",
 flexDirection: "row",
 alignItems: "center",
 justifyContent: "space-between",
 [theme.breakpoints.down("laptop")]: {
  display: "none",
 },
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
 display: "none",
 [theme.breakpoints.down("laptop")]: {
  display: "flex",
 },
}));

export const StyledIconButton = styled(IconButton)({
 width: "30%",
 height: "100%",
 padding: "2px",
});

export const StyledIconButtonContainer = styled(IconButton)({
 display: "flex",
 justifyContent: "space-between",
});

export const StyledIconButtonMenu = styled(IconButton)(({ theme }) => ({
 display: "none",
 [theme.breakpoints.down("laptop")]: {
  display: "flex",
 },
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
 display: "none",
 [theme.breakpoints.down("laptop")]: {
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
 },
}));

export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
 color: theme.palette.text.primary,
}));

export const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
 color: theme.palette.text.primary,
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
 display: "none",
 [theme.breakpoints.down("laptop")]: {
  display: "flex",
  "& .MuiDrawer-paper": {
   width: "100%",
   position: "fixed",
   top: "70px",
   backgroundColor: theme.palette.info.dark,
  },
 },
}));

export const StyledLogoContainer = styled(Box)(({ theme }) => ({
 width: "200px",
 height: "100%",
 padding: " 0 20px",
 display: "flex",
 alignItems: "center",
 [theme.breakpoints.down("laptop")]: {
  width: "110px",
 },
 [theme.breakpoints.down("tablet")]: {
  width: "70px",
  height: "100%",
  overflow: "hidden",
 },
}));

export const LogoMobile = styled(Box)(({ theme }) => ({
 display: "none",
 [theme.breakpoints.down("laptop")]: {
  display: "block",
  "& img": {
   width: "50px",
   height: "50px",
  },
 },
}));

export const LogoDesktop = styled(Box)(({ theme }) => ({
 "& img": {
  width: "100%",
  height: "100%",
 },
 [theme.breakpoints.down("tablet")]: {
  display: "none",
 },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
 backgroundColor: theme.palette.common.white,
 color: theme.palette.info.main,
 textTransform: "uppercase",
 textAlign: "center",
}));

export const StyledButtonContainer = styled(Box)({
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 gap: "16px",
});
