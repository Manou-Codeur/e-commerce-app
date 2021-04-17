export const generateChangePasswordsInputs = (values, errors, touched) => [
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
    label: "New Password",
    value: values.newPassword,
    name: "newPassword",
    error: errors.newPassword,
    touched: touched.newPassword,
  },
];
