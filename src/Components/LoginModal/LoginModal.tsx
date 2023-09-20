import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginModalContainer } from "./LoginModal.styles";
import { StyledButton } from "../../ui/StyledButton/StyledButton.styles";
import { ModalErrorMessage, ModalFooter, ModalHeader, ModalInput, ModalSubHeader } from "../../ui";
import { useContext } from "react";
import { OrderAiContext } from "../../Context/ContextProvider";
import Modal from "@mui/material/Modal";

export function LoginModal() {
 const { changeModal, handleModalClose, isModalOpen } = useContext(OrderAiContext);
 const formik = useFormik({
  initialValues: {
   email: "",
   password: "",
  },
  validationSchema: Yup.object({
   email: Yup.string().max(25, "Email must be 25 characters or less.").email("Invalid email address.").required("Required"),
   password: Yup.string().max(25, "Password must be 25 characters or less.").min(8, "Password must be minimum 8 characters.").required("Required"),
  }),
  onSubmit: (values) => {
   alert(JSON.stringify(values, null, 2));
  },
 });
 return (
  <Modal open={isModalOpen} onClose={handleModalClose}>
   <LoginModalContainer>
    <ModalHeader>Sign In</ModalHeader>
    <ModalSubHeader>Welcome back. Sign in to continue</ModalSubHeader>
    <form onSubmit={formik.handleSubmit}>
     <ModalInput id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
     <ModalErrorMessage>{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</ModalErrorMessage>

     <ModalInput id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
     <ModalErrorMessage>{formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}</ModalErrorMessage>

     <StyledButton type="submit">Submit</StyledButton>
    </form>
    <ModalFooter>
     Don't have an account?{" "}
     <a
      onClick={() => {
       changeModal("Sign Up");
      }}>
      <b>Create account</b>
     </a>
    </ModalFooter>
   </LoginModalContainer>
  </Modal>
 );
}
