import { useRef, useState } from "react";
import { StyledCloseIcon, StyledDrawer, StyledIconButton, StyledIconButtonMenu, StyledLogoContainer, StyledMenu, StyledMenuIcon } from "./Menu.styles";
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
 const { changeModal, handleModalOpen } = useContext(OrderAiContext);
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
   setShowButtons("block");
  } else {
   setShowButtons("none");
  }
 };

 const Import = () => {
  handleModalOpen();
  changeModal("Import");
 };

 const Export = () => {
  handleModalOpen();
  changeModal("Export");
 };

 const optionButtons = [
  {
   name: "Import",
   img: "../../../src/assets/clarity_import-line.png",
   eventClick: Import,
  },
  {
   name: "Export",
   img: "../../../src/assets/clarity_export-line.png",
   eventClick: Export,
  },
  {
   name: "Login",
   img: "../../../src/assets/clarity_avatar-line.png",
   eventClick: showHideLoginButtons,
  },
 ];
 const buttonsContainerStyles = {
  marginLeft: "auto",
  display: showButtons,
  position: "absolute",
  backgroundColor: "#5C358E",
 };

 const outsideClickRef = useRef(null);
 const handleClickOutsideMenuButtons = () => {
  setShowButtons("none");
 };
 useClickOutside(outsideClickRef, handleClickOutsideMenuButtons);

 return (
  <Box>
   <StyledMenu>
    {optionButtons.map(({ img, name, eventClick }) => (
     <StyledIconButton onClick={eventClick} key={name}>
      <img src={img} />
     </StyledIconButton>
    ))}
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
      <ListItemButton>
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
