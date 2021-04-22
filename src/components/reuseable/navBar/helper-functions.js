import { useFormik } from "formik";
import * as Yup from "yup";

import * as schemas from "./yup-schema";

//here the initvalues will be dynamic
const getInitValues = form => {
  if (form === "singin")
    return {
      email: "",
      password: "",
    };
  else if (form === "singup")
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    };
  else
    return {
      email: "",
    };
};

export const useCustomFormik = (form, submitFunction) => {
  return useFormik({
    initialValues: getInitValues(form),
    validationSchema: Yup.object(schemas[`${form}Schema`]),
    onSubmit: values => {
      submitFunction(values);
    },
  });
};

export const closeFormWithNoBubbling = ({ target }, closeFucntion) => {
  if (target.nodeName === "DIV" && target.className.includes("background"))
    closeFucntion();
};
