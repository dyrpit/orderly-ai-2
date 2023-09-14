import { ModalHeader, ModalFooter, ModalSubHeader, ModalInput, ModalButton } from "../LoginModal/LoginModal.styles";
import { RegisterModalContainer } from "../RegisterModal/RegisterModal.styles";

export function RegisterModal() {
  return (
    <RegisterModalContainer>
      <ModalHeader>
        Sign Up
      </ModalHeader>
      <ModalSubHeader>
        Start using OrderlyAI today!
      </ModalSubHeader>
      <form>
        <ModalInput placeholder="Email" variant="standard" InputProps={{disableUnderline: true}} required></ModalInput>
        <ModalInput placeholder="Password" variant="standard" InputProps={{disableUnderline: true}} required></ModalInput>
        <ModalInput placeholder="Repeat password" variant="standard" InputProps={{disableUnderline: true}} required></ModalInput>
        <ModalButton>Sign Up</ModalButton>
      </form>
      <ModalFooter>
        Already have an account? <a href="#"><b>Sign in</b></a>
      </ModalFooter>
    </RegisterModalContainer>
  );
}
