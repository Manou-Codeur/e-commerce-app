import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

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

const Input = ({ error, touched, selectList, ...rest }) => {
  const classes = useStyles();

  if (rest.type === "select")
    return (
      <FormControl
        variant="outlined"
        className={classes.root}
        size={error && touched ? "small" : "medium"}
      >
        <InputLabel id="country-select">{rest.label}</InputLabel>

        <Select labelId="country-select" {...rest} error={error && touched}>
          {selectList.map(item => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        {error && touched && (
          <FormHelperText style={{ color: "red" }}>{error}</FormHelperText>
        )}
      </FormControl>
    );

  return (
    <TextField
      variant="outlined"
      className={classes.root}
      {...rest}
      multiline={rest.type === "textArea"}
      rows={rest.type === "textArea" ? 4 : null}
      error={error && touched}
      helperText={touched && error}
      size={error && touched ? "small" : "medium"}
    />
  );
};

export default Input;
