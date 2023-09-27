import { useRef, useState } from "react";
import { StyledAvatar, StyledCloseIcon, StyledDrawer, StyledIconButton, StyledIconButtonMenu, StyledLogoContainer, StyledMenu, StyledMenuIcon } from "./Menu.styles";
import { Box, Divider, ListItem, ListItemButton } from "@mui/material";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import "./Menu.css";
import { SignIn } from "..";
import { SignOut } from "../SignButtons/SignOut";
import { AdminPanel } from "../SignButtons/AdminPanel";
import useAuth from "../../Hooks/useAuth";
import useClickOutside from "../../Hooks/useClickOutside";

const imgStyle = {
 width: "100%",
 height: "100%",
};

export const Menu = () => {
 const { loggedUserRole, loggedUserEmail, changeModal, handleModalOpen } = useContext(OrderAiContext);
 const { getIsTokenExist } = useAuth();
 const [showButtons, setShowButtons] = useState("none");
 const [open, setOpen] = useState(false);

 const handleDrawerOpen = () => {
  setOpen(true);
 };
 const handleDrawerClose = () => {
  setOpen(false);
 };
 const showHideLoginButtons = () => {
  if (showButtons === "none") {
   return setShowButtons("block");
  } else {
   return setShowButtons("none");
  }
 };

 const handleImport = () => {
  handleModalOpen();
  changeModal("Import");
 };

 const handleExport = () => {
  handleModalOpen();
  changeModal("Export");
 };

 const buttonsContainerStyles = {
  marginLeft: "auto",
  display: showButtons,
  position: "absolute",
  backgroundColor: "#5C358E",
  zIndex: "1000",
 };

 const outsideClickRef = useRef(null);
 const handleClickOutsideMenuButtons = () => {
  setShowButtons("none");
 };
 useClickOutside(outsideClickRef, handleClickOutsideMenuButtons);

 return (
  <Box>
   <StyledMenu>
    <StyledIconButton onClick={handleImport}>
     <img src="../../../src/assets/clarity_import-line.png" />
    </StyledIconButton>
    <StyledIconButton onClick={handleExport}>
     <img src=".../../../src/assets/clarity_export-line.png" />
    </StyledIconButton>
    {loggedUserRole ? (
     <StyledIconButton onClick={showHideLoginButtons}>
      <StyledAvatar>{loggedUserEmail.slice(0, 2)}</StyledAvatar>
     </StyledIconButton>
    ) : (
     <StyledIconButton onClick={showHideLoginButtons}>
      <img src="../../../src/assets/clarity_avatar-line.png" />
     </StyledIconButton>
    )}
   </StyledMenu>
   {open ? (
    <StyledIconButtonMenu onClick={handleDrawerClose} sx={{ display: "flex", justifyContent: "end" }}>
     {<StyledCloseIcon />}
    </StyledIconButtonMenu>
   ) : (
    <StyledIconButtonMenu onClick={handleDrawerOpen}>{<StyledMenuIcon />}</StyledIconButtonMenu>
   )}
   <StyledDrawer variant="persistent" anchor="right" open={open}>
    <Divider />
    <List>
     <ListItem>
      <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
       <Box>
        {getIsTokenExist() ? (
         <>
          <SignOut />
          <AdminPanel />
         </>
        ) : (
         <SignIn />
        )}
       </Box>
      </ListItemButton>
     </ListItem>
    </List>
   </StyledDrawer>
   <Box sx={buttonsContainerStyles} ref={outsideClickRef}>
    {getIsTokenExist() ? (
     <>
      <SignOut />
      <AdminPanel />
     </>
    ) : (
     <SignIn />
    )}
   </Box>
  </Box>
 );
};

export const LogoContainer = () => {
 return (
  <Link to="/">
   <StyledLogoContainer>
    <div className="logo-wrapper">
     <img style={imgStyle} src="../../../src/assets/logo.png" />
    </div>
   </StyledLogoContainer>
  </Link>
 );
};
