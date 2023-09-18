import { useFormik } from "formik";
import * as Yup from "yup";
import {
  LoginModalContainer,
  ModalButton,
  ModalErrorMessage,
  ModalFooter,
  ModalHeader,
  ModalInput,
  ModalSubHeader,
} from "./LoginModal.styles";

export default function ValidationSchemaExample() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <LoginModalContainer>
      <ModalHeader>Sign In</ModalHeader>
      <ModalSubHeader>Welcome back. Sign in to continue</ModalSubHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <ModalErrorMessage>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </ModalErrorMessage>

        <ModalInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        <ModalErrorMessage>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </ModalErrorMessage>

        <ModalButton type="submit">Submit</ModalButton>
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
