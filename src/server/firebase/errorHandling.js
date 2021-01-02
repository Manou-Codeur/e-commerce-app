const handleSingupErrors = (error, setErrors, setGlobalErrors) => {
  if (error.code.includes("email-already-in-use")) {
    setErrors({ email: "Email is already taken!" });
  } else {
    setGlobalErrors("There is an unexpected error, try again please!");
  }
};

const handleSinginErrors = (error, setErrors, setGloablErrors) => {
  if (error.code.includes("user-not-found")) {
    setErrors({ email: " ", password: "Wrong e-mail or password." });
  } else if (error.code.includes("wrong-password")) {
    setErrors({ password: "Wrong password." });
  } else {
    setGloablErrors("There is an unexpected error, try again please!");
  }
};

const handleResetPasswordErrors = (error, setErrors, setGloablErrors) => {
  if (error.code.includes("user-not-found"))
    setErrors({
      email: "Unfound email address, fill the right one please!",
    });
  else setGloablErrors("There is an unexpected error, try again please!");
};

export const handleErrors = (form, error, setErrors, setGloablErrors) => {
  if (form === "singup") handleSingupErrors(error, setErrors, setGloablErrors);
  else if (form === "singin")
    handleSinginErrors(error, setErrors, setGloablErrors);
  else handleResetPasswordErrors(error, setErrors, setGloablErrors);
};
