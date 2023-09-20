import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterModalContainer } from "../RegisterModal/RegisterModal.styles";
import { ModalErrorMessage, ModalFooter, ModalHeader, ModalInput, ModalSubHeader, StyledButton } from "../../ui";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";

export function RegisterModal() {
 const { changeModal, isModalOpen, handleModalClose } = useContext(OrderAiContext);

 const formik = useFormik({
  initialValues: {
   email: "",
   password: "",
   repeatPassword: "",
  },
  validationSchema: Yup.object({
   email: Yup.string().max(25, "Email must be 25 characters or less.").email("Invalid email address.").required("Required"),
   password: Yup.string().max(25, "Password must be 25 characters or less.").min(8, "Password must be minimum 8 characters.").required("Required"),
   repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  }),
  onSubmit: (values) => {
   alert(JSON.stringify(values, null, 2));
  },
 });
 return (
  <Modal open={isModalOpen} onClose={handleModalClose}>
   <RegisterModalContainer>
    <ModalHeader>Sign Up</ModalHeader>
    <ModalSubHeader>Start using OrderlyAI today!</ModalSubHeader>
    <form onSubmit={formik.handleSubmit}>
     <ModalInput id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></ModalInput>
     <ModalErrorMessage>{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</ModalErrorMessage>
     <ModalInput id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}></ModalInput>
     <ModalErrorMessage>{formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}</ModalErrorMessage>
     <ModalInput
      id="repeatPassword"
      name="repeatPassword"
      type="password"
      placeholder="Repeat password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.repeatPassword}></ModalInput>
     <ModalErrorMessage>{formik.touched.repeatPassword && formik.errors.repeatPassword ? <div>{formik.errors.repeatPassword}</div> : null}</ModalErrorMessage>
     <StyledButton>Sign Up</StyledButton>
    </form>
    <ModalFooter>
     Already have an account?{" "}
     <a
      onClick={() => {
       changeModal("Sign In");
      }}>
      <b>Sign in</b>
     </a>
    </ModalFooter>
   </RegisterModalContainer>
  </Modal>
 );
}
