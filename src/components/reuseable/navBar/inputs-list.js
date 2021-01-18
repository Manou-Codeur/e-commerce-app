import { countries } from "./../../../server/fake-db/countries-list";

export const generateSingupInputs = (values, errors, touched) => [
  {
    type: "text",
    label: "Full name",
    value: values.fullName,
    name: "fullName",
    error: errors.fullName,
    touched: touched.fullName,
  },
  {
    type: "email",
    label: "E-mail",
    value: values.email,
    name: "email",
    error: errors.email,
    touched: touched.email,
  },
  {
    type: "password",
    label: "Password",
    value: values.password,
    name: "password",
    error: errors.password,
    touched: touched.password,
  },
  {
    type: "password",
    label: "Confirm password",
    value: values.confirmPassword,
    name: "confirmPassword",
    error: errors.confirmPassword,
    touched: touched.confirmPassword,
  },
  {
    type: "select",
    label: "Country",
    value: values.country,
    name: "country",
    error: errors.country,
    touched: touched.country,
    selectList: countries,
  },
];

export const generateSinginInputs = (values, errors, touched) => [
  {
    type: "email",
    label: "E-mail",
    value: values.email,
    name: "email",
    error: errors.email,
    touched: touched.email,
  },
  {
    type: "password",
    label: "Password",
    value: values.password,
    name: "password",
    error: errors.password,
    touched: touched.password,
  },
];

export const generateResetPasswordInputs = (values, errors, touched) => [
  {
    type: "email",
    label: "E-mail",
    value: values.email,
    name: "email",
    error: errors.email,
    touched: touched.email,
  },
];
