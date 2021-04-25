import React, { forwardRef } from "react";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import "./sizeSelect.scss";

const useStyles = makeStyles({
  root: {
    width: 150,
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

const SizeSelect = forwardRef(({ productType, productGenre }, ref) => {
  const classes = useStyles();

  const generateSizes = () => {
    if (productType === "clothes") {
      return ["S", "M", "L", "XL"];
    }
    return productGenre === "kids"
      ? [22, 23, 25, 26, 27, 28, 29]
      : [36, 37, 38, 39, 40, 41, 42];
  };

  return (
    <div className="size-select">
      <FormControl variant="standard" className={classes.root}>
        <InputLabel id="size-select">Select Size</InputLabel>

        <Select labelId="size-select" defaultValue="" ref={ref}>
          {generateSizes().map(size => (
            <MenuItem value={size} key={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default SizeSelect;
