import {
  ModalHeader,
  ModalFooter,
  ModalSubHeader,
  ModalInput,
  ModalButton,
  LoginModalContainer,
} from "./LoginModal.styles";

export function LoginModal() {
  return (
    <LoginModalContainer>
      <ModalHeader>Sign In</ModalHeader>
      <ModalSubHeader>Welcome back. Sign in to continue</ModalSubHeader>
      <form>
        <ModalInput
          placeholder="Email"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        ></ModalInput>
        <ModalInput
          placeholder="Password"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          required
        ></ModalInput>
        <ModalButton>Sign In</ModalButton>
      </form>
      <ModalFooter>
        Don't have an account?{" "}
        <a href="#">
          <b>Create account</b>
        </a>
      </ModalFooter>
    </LoginModalContainer>
  );
}
