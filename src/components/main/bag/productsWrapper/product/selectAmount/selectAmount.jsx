import React from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

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

const AmountSelect = () => {
  const classes = useStyles();

  const amounts = [1, 2, 3, 4, 5];

  return (
    <FormControl className={classes.root}>
      <InputLabel id="amount-select">Amount</InputLabel>

      <Select labelId="amount-select" defaultValue="">
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
