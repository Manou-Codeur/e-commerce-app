import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { updateCard } from "../../../../../../store/card";

const useStyles = makeStyles({
  root: {
    width: "40%",
    "& label": {
      color: "black",
      fontSize: "1em",
    },
    "& label.Mui-focused": {
      color: "black",
      fontWeight: 600,
      fontSize: "1.1em",
    },
    "& .MuiSelect-selectMenu": {
      background: "transparent",
    },
    "& .MuiInput-underline:after": {
      borderColor: "black",
    },
  },
});

const AmountSelect = ({ pid, amount, allProducts, productIndex }) => {
  const [currAmount, setCurrAmount] = useState(amount);

  const classes = useStyles();

  const dispatch = useDispatch();

  const amounts = [1, 2, 3, 4, 5];

  const handleOnChange = ({ target: { value } }) => {
    //redux
    dispatch(updateCard({ pid: pid, newAmount: value }));

    //local storage mutating
    allProducts[productIndex].amount = value;
    localStorage.setItem("products", JSON.stringify(allProducts));
  };

  return (
    <FormControl className={classes.root}>
      <InputLabel id="amount-select">Amount</InputLabel>

      <Select
        labelId="amount-select"
        defaultValue={currAmount}
        onChange={handleOnChange}
      >
        {amounts.map(amount => (
          <MenuItem value={amount} key={amount}>
            {amount}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AmountSelect;
