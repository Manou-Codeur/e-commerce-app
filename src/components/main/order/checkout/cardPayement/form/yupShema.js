import * as Yup from "yup";

export const checkoutInputsSchema = {
  cardNumber: Yup.number().required("Card number is required!"),
  holderName: Yup.string()
    .matches(/^[a-z ,.'-]+$/i, { message: "Invalid holder name" })
    .max(55)
    .min(8)
    .required("Holder name is required!")
    .trim(),
  expirationDate: Yup.number().required("Expiration date is required!"),
  year: Yup.number().required("Expiration year is required!"),
  cvv: Yup.number().required("Cvv is required!"),
};
