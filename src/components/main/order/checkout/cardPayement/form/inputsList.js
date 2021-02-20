export const generateLine1And2 = (values, errors, touched) => [
  {
    type: "text",
    label: "Card Number",
    value: values.cardNumber,
    name: "cardNumber",
    error: errors.cardNumber,
    touched: touched.cardNumber,
  },
  {
    type: "text",
    label: "Holder Name",
    value: values.holderName,
    name: "holderName",
    error: errors.holderName,
    touched: touched.holderName,
  },
];

export const generateLine3 = (values, errors, touched) => [
  {
    type: "select",
    label: "Expiration Date",
    value: values.expirationDate,
    name: "expirationDate",
    error: errors.expirationDate,
    touched: touched.expirationDate,
    selectList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    type: "select",
    label: "Year",
    value: values.year,
    name: "year",
    error: errors.year,
    touched: touched.year,
    selectList: [22, 23, 24, 25, 26, 27, 28, 29],
  },
  {
    type: "password",
    label: "Cvv",
    value: values.cvv,
    name: "cvv",
    error: errors.cvv,
    touched: touched.cvv,
  },
];
