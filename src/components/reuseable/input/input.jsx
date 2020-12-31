import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import { countries } from "../../../server/fake-db/countries-list";

const useStyles = makeStyles({
  root: {
    margin: ".5em 0",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
});

const Input = props => {
  const classes = useStyles();

  if (props.type === "select")
    return (
      <FormControl variant="outlined" className={classes.root}>
        <InputLabel id="countrt-select">{props.label}</InputLabel>

        <Select labelId="countrt-select" label={props.label}>
          {countries.map(country => (
            <MenuItem value={country} key={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );

  return <TextField variant="outlined" className={classes.root} {...props} />;
};

export default Input;
