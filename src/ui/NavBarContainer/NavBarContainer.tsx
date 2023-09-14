import { ReactNode } from "react";
import { StyledNavBarContainer } from "./NavBarContainer.styles";

type NavBarContainerProps = {
  children: ReactNode;
};

export const NavBarContainer = ({ children }: NavBarContainerProps) => {
  return (
    <StyledNavBarContainer>
      {children}
    </StyledNavBarContainer>
  );
};

