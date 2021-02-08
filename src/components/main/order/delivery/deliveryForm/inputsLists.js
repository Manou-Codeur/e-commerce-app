import { countries } from "./../../../../../server/fake-db/countries-list";

export const generateLine1 = (values, errors, touched) => [
  {
    type: "text",
    label: "First Name",
    value: values.firstName,
    name: "firstName",
    error: errors.firstName,
    touched: touched.firstName,
  },
  {
    type: "text",
    label: "Last Name",
    value: values.lastName,
    name: "lastName",
    error: errors.lastName,
    touched: touched.lastName,
  },
];

export const generateLine2 = (values, errors, touched) => [
  {
    type: "text",
    label: "Phone",
    value: values.phone,
    name: "phone",
    error: errors.phone,
    touched: touched.phone,
  },
  {
    type: "text",
    label: "E-Mail",
    value: values.email,
    name: "email",
    error: errors.email,
    touched: touched.email,
  },
];

export const generateLine3 = (values, errors, touched) => [
  {
    type: "select",
    label: "Country",
    value: values.country,
    name: "country",
    error: errors.country,
    touched: touched.country,
    selectList: countries,
  },
  {
    type: "text",
    label: "City",
    value: values.city,
    name: "city",
    error: errors.city,
    touched: touched.city,
  },
  {
    type: "number",
    label: "Zip Code",
    value: values.zipCode,
    name: "zipCode",
    error: errors.zipCode,
    touched: touched.zipCode,
  },
];

export const generateLine4 = (values, errors, touched) => [
  {
    type: "text",
    label: "Address",
    value: values.address,
    name: "address",
    error: errors.address,
    touched: touched.address,
  },
];
