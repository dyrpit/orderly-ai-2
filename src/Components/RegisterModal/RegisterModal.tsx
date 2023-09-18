import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ModalHeader,
  ModalFooter,
  ModalSubHeader,
  ModalInput,
  ModalButton,
  ModalErrorMessage,
} from "../LoginModal/LoginModal.styles";
import { RegisterModalContainer } from "../RegisterModal/RegisterModal.styles";

export function RegisterModal() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(25, "Email must be 25 characters or less.")
        .email("Invalid email address.")
        .required("Required"),
      password: Yup.string()
        .max(25, "Password must be 25 characters or less.")
        .min(8, "Password must be minimum 8 characters.")
        .required("Required"),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <RegisterModalContainer>
      <ModalHeader>Sign Up</ModalHeader>
      <ModalSubHeader>Start using OrderlyAI today!</ModalSubHeader>
      <form onSubmit={formik.handleSubmit}>
        <ModalInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        ></ModalInput>
        <ModalErrorMessage>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </ModalErrorMessage>
        <ModalInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        ></ModalInput>
        <ModalErrorMessage>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </ModalErrorMessage>
        <ModalInput
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
        ></ModalInput>
        <ModalErrorMessage>
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <div>{formik.errors.repeatPassword}</div>
          ) : null}
        </ModalErrorMessage>
        <ModalButton>Sign Up</ModalButton>
      </form>
      <ModalFooter>
        Already have an account?{" "}
        <a href="#">
          <b>Sign in</b>
        </a>
      </ModalFooter>
    </RegisterModalContainer>
  );
}
