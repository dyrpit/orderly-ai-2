import { ModalHeader, ModalFooter, ModalSubHeader, ModalInput, ModalButton, ModalContainer } from "./LoginModal.styles";

export function LoginModal() {
  return (
    <ModalContainer>
      <ModalHeader>
        Sign In
      </ModalHeader>
      <ModalSubHeader>
        Welcome back. Sign in to continue
      </ModalSubHeader>
      <form>
        <ModalInput placeholder="Email" variant="standard" InputProps={{disableUnderline: true}}></ModalInput>
        <ModalInput placeholder="Password" variant="standard" InputProps={{disableUnderline: true}}></ModalInput>
        <ModalButton>Sign In</ModalButton>
      </form>
      <ModalFooter>
        Don't have an account? <a href="www.google.com"><b>Create account</b></a>
      </ModalFooter>
    </ModalContainer>
  );
}
