import * as Yup from "yup";

export const deliveryInputsSchema = {
  firstName: Yup.string()
    .matches(/^[a-z ,.'-]+$/i, { message: "Invalid First Name" })
    .max(55)
    .min(3)
    .required("First Name is required!")
    .trim(),
  lastName: Yup.string()
    .matches(/^[a-z ,.'-]+$/i, { message: "Invalid Last Name" })
    .max(55)
    .min(3)
    .required("Last Name is required!")
    .trim(),
  phone: Yup.number().required("Phone number is required!"),
  email: Yup.string().email("Email is invalid!").required("Email is required!"),
  country: Yup.string().required("Country name is required!"),
  city: Yup.string().required("City name is required!"),
  zipCode: Yup.number().required("Zip Code is required!"),
  address: Yup.string().min(20).required("Address is required!"),
};
