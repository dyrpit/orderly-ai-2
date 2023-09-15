import { ReactNode } from "react";
import { StyledNavBarContainer } from "./NavbarContainer.styles";

type NavbarContainerProps = {
  children: ReactNode;
};

export const NavbarContainer = ({ children }: NavbarContainerProps) => {
  return (
    <StyledNavBarContainer>
      {children}
    </StyledNavBarContainer>
  );
};