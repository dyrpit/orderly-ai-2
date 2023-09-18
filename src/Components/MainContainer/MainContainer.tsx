import { Container } from "./MainContainer.styles";
import React, { ReactNode } from 'react';

interface MainContainerProps {
  children?: ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}