import { useState } from "react";
import {
  StyledCloseIcon,
  StyledDrawer,
  StyledIconButton,
  StyledIconButtonMenu,
  StyledLogoContainer,
  StyledMenu,
  StyledMenuIcon,
} from "./Menu.styles";
import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const optionButtons = [
  {
    name: "Import",
    img: "assets/clarity_import-line.png",
  },
  {
    name: "Export",
    img: "assets/clarity_export-line.png",
  },
  {
    name: "Login",
    img: "assets/clarity_avatar-line.png",
  },
];

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <StyledMenu>
        {optionButtons.map(({ img, name }) => (
          <StyledIconButton key={name}> <img src={img} /></StyledIconButton>
        ))}
      </StyledMenu>
      {open ? (
        <StyledIconButtonMenu onClick={handleDrawerClose}>
          {<StyledCloseIcon />}
        </StyledIconButtonMenu>
      ) : (
        <StyledIconButtonMenu onClick={handleDrawerOpen}>
          {<StyledMenuIcon />}
        </StyledIconButtonMenu>
      )}
      <StyledDrawer variant='persistent' anchor='right' open={open}>
        {" "}
        <Divider />
        <List>
          {optionButtons.map(({ img, name }) => (
            <ListItem key={name}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={img} />
                </ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
};

export const LogoContainer = () => {
  return <StyledLogoContainer>LOGO XD</StyledLogoContainer>;
};
