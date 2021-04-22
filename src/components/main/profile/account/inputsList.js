export const generateChangePasswordsInputs = (values, errors, touched) => [
  {
    type: "password",
    label: "New Password",
    value: values.newPassword,
    name: "newPassword",
    error: errors.newPassword,
    touched: touched.newPassword,
  },
];
