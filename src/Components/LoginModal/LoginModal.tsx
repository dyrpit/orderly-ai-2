import {
  ModalHeader,
  ModalFooter,
  ModalSubHeader,
  ModalInput,
  ModalButton,
  LoginModalContainer,
  ModalErrorMessage,
} from "./LoginModal.styles";
import { useState, useRef, useEffect } from "react";
import usersData from "../../Data/users.json";

export function LoginModal() {
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [success, setSuccess] = useState(false);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const errors = [
    {
      name: "emailError",
      errorMessage:
        "Email should be 2-30 characters and should contain domain!",
      // Do zmiany ten pattern
      pattern: "^[A-Za-z0-9._-]{1,30}@[A-Za-z0-9.-]+.[A-Za-z]{1,30}$",
    },
    {
      name: "passwordError",
      errorMessage: "Password should be 2-20 characters!",
      pattern: "^.{1,20}$",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailHandleErrors();
    passwordHandleErrors();
    const enteredEmail = email;
    const enteredPassword = password;

    const foundUser = usersData.users.find((user) => {
      return user.email === enteredEmail && user.password === enteredPassword;
    });

    if (showEmailErrorMessage === false && showPasswordErrorMessage === false) {
      if (foundUser) {
        alert("Logged as: " + foundUser.role);
      } else {
        alert("Wrong email or passowrd!");
      }
    }
  }
  function emailHandleErrors() {
    const emailPattern = new RegExp(errors[0].pattern);
    const isValidEmail = emailPattern.test(email);
    setShowEmailErrorMessage(!isValidEmail);
  }
  function passwordHandleErrors() {
    const passwordPattern = new RegExp(errors[1].pattern);
    const isValidPassword = passwordPattern.test(password);
    setShowPasswordErrorMessage(!isValidPassword);
  }

  return (
    <LoginModalContainer>
      <ModalHeader>Sign In</ModalHeader>
      <ModalSubHeader>Welcome back. Sign in to continue</ModalSubHeader>
      <form onClick={handleSubmit}>
        <ModalInput
          placeholder="Email"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></ModalInput>
        {showEmailErrorMessage && (
          <ModalErrorMessage>{errors[0].errorMessage}</ModalErrorMessage>
        )}
        <ModalInput
          placeholder="Password"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          value={password}
        ></ModalInput>
        {showPasswordErrorMessage && (
          <ModalErrorMessage>{errors[1].errorMessage}</ModalErrorMessage>
        )}
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
