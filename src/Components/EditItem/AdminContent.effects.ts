import { useFormik } from "formik";
import * as Yup from "yup";

export const useAdminContentEffects = () => {

  const formik = useFormik({
    initialValues: {
      category: "",
      license: "",
      website: "",
      ytUrl: "",
      description: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      license: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      description: Yup.string().min(10, "Must be at least 10 characters").max(150, "Must be 150 characters or less").required("Required"),
      website: Yup.string()
        .matches(/(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Enter correct url!")
        .required("Please enter website"),
      ytUrl: Yup.string()
        .matches(/(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "Enter correct url!")
        .required("Please enter YouTube url"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    form: formik
  };

};