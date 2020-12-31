import * as Yup from "yup";
import { useFormik } from "formik";

//yup schema
export const schema = {
  fullName: Yup.string()
    .strict(true)
    .max(55)
    .min(8)
    .required("Name is required!")
    .trim(),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  password: Yup.string()
    .strict()
    .lowercase("Password must contain only lowercase!")
    .min(6, "Password must contain at least 6 chars!")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .equals([Yup.ref("password"), null], "Passwords doesn't match!")
    .required("Password confirmation is required!"),
  country: Yup.string().required("Country name is required!"),
};
