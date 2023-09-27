import { Container } from "./MainContainer.styles";
import { ReactNode } from 'react';

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