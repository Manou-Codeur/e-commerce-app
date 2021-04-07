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

const SizeSelect = forwardRef(({ productType }, ref) => {
  const classes = useStyles();

  const sizes =
    productType === "shoes" ? [36, 37, 38, 39, 40, 41, 42] : ["S", "M", "L"];

  return (
    <div className="size-select">
      <FormControl variant="standard" className={classes.root}>
        <InputLabel id="size-select">Select Size</InputLabel>

        <Select labelId="size-select" defaultValue="" ref={ref}>
          {sizes.map(size => (
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
