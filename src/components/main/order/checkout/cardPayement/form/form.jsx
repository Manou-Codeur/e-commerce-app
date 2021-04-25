import React, { useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import InputsWrapper from "./../../../../../reuseable/inputsWrapper/inputsWrapper";
import OrderContext from "./../../../../../../context/orderContext";
import FirebaseContext from "./../../../../../../server/firebase/firebaseContext";

import { generateLine1And2, generateLine3 } from "./inputsList";
import { checkoutInputsSchema } from "./yupShema";
import "./form.scss";

const Form = ({
  onChange: { setCardHolder, setCardNumber, setCardExp, setCardType },
}) => {
  const { goToStep } = useContext(OrderContext);
  const { firebase } = useContext(FirebaseContext);
  //redux
  const products = useSelector(state => state.products);

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      cardNumber: "",
      holderName: "",
      expirationDate: "",
      year: "",
      cvv: "",
    },
    validationSchema: Yup.object(checkoutInputsSchema),
    onSubmit: values => {
      doSubmit(values);
    },
  });

  const CARDS = {
    visa: "^4",
    amex: "^(34|37)",
    mastercard: "^5[1-5]",
    discover: "^6011",
    unionpay: "^62",
    troy: "^9792",
    diners: "^(30[0-5]|36)",
  };

  const generateCardType = cardNumber => {
    const number = cardNumber;
    let re;
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern);
      if (number.match(re) != null) {
        return card;
      }
    }

    return "visa"; // default type
  };

  const formalizeCardNumber = number => {
    let final = "";
    for (let i = 0; i < number.length; i++) {
      if (i % 4 === 0) final += " ";
      final += number[i];
    }
    return final;
  };

  useEffect(() => {
    if (values.cardNumber === "") {
      setCardNumber("XXXX XXXX XXXX XXXX");
      setCardType("visa");
    } else {
      setCardNumber(formalizeCardNumber(values.cardNumber));
      setCardType(generateCardType(values.cardNumber));
    }
  }, [values.cardNumber]);

  useEffect(() => {
    if (values.holderName === "") setCardHolder("UserName");
    else setCardHolder(values.holderName);
  }, [values.holderName]);

  useEffect(() => {
    if (values.expirationDate === "") setCardExp("MM/YY");
    else setCardExp(`${values.expirationDate}/${values.year}`);
  }, [values.expirationDate, values.year]);

  const customHandleChange = e => {
    const { value, name } = e.target;
    const numRegx = /^\d+$/;
    const nameRegx = /^[a-zA-Z ]+$/;

    if (name === "cardNumber") {
      if ((value !== "" && !numRegx.test(value)) || value.length > 16) return;
    }

    if (name === "holderName") {
      if (value !== "" && !nameRegx.test(value)) return;
    }

    if (name === "cvv") {
      if ((value !== "" && !numRegx.test(value)) || value.length > 4) return;
    }

    handleChange(e);
  };

  const doSubmit = async values => {
    try {
      await firebase.addBuyedProducts(products);
      // 3. do something about the payment
    } catch (error) {
      console.log(error);
      console.log("sdsd");
    }

    goToStep("done");
  };

  return (
    <div className="form">
      <div className="form__line">
        <InputsWrapper
          inputs={generateLine1And2(values, errors, touched)}
          eventsFunctions={{ onChange: customHandleChange, onBlur: handleBlur }}
        />
      </div>

      <div className="form__line">
        <InputsWrapper
          inputs={generateLine3(values, errors, touched)}
          eventsFunctions={{ onChange: customHandleChange, onBlur: handleBlur }}
        />
      </div>

      <button className="form__submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
