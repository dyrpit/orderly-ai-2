import { StyledIconButton, StyledLogoContainer, StyledNavBarIconsContainer } from "./NavBarIcons.styles";
import "../../../public/assets/clarity_avatar-line.png";
import "../../../public/assets/clarity_export-line.png";
import "../../../public/assets/clarity_import-line.png";
import { Box } from "@mui/material";

export const NavBarIcons = () => {
  return (
    <Box sx={{ width: "250px" }}>
      <StyledNavBarIconsContainer>
        <StyledIconButton>
          <img src="./../../public/assets/clarity_import-line.png" />
        </StyledIconButton>
        <StyledIconButton>
          <img src="./../../public/assets/clarity_export-line.png" />
        </StyledIconButton>
        <StyledIconButton>
          <img src="./../../public/assets/clarity_avatar-line.png" />
        </StyledIconButton>
      </StyledNavBarIconsContainer>
    </Box>
  );
};

export const LogoContainer = () => {
  return (
    <StyledLogoContainer>
      LOGO XD
    </StyledLogoContainer>
  );
};