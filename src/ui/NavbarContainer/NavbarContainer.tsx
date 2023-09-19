import { ReactNode } from "react";
import { NavbarContainerWrapper, StyledNavBarContainer } from "./NavbarContainer.styles";

type NavbarContainerProps = {
  children: ReactNode;
};

export const NavbarContainer = ({ children }: NavbarContainerProps) => {
  return (
    <NavbarContainerWrapper>
      <StyledNavBarContainer>
        {children}
      </StyledNavBarContainer>
    </NavbarContainerWrapper>
  );
};