import * as Yup from "yup";

export const changePasswordFormSchema = {
  newPassword: Yup.string()
    .strict()
    .lowercase("New Password must contain only lowercase!")
    .min(6, "New Password must contain at least 6 chars!")
    .required("New Password is required!"),
};
