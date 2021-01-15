import * as Yup from "yup";

export const reviewFormSchema = {
  rating: Yup.string()
  .required("Rating is required!"),
  title: Yup.string().required("Title is required!"),
  description: Yup.string().min(15).required("Description is required!"),
};
