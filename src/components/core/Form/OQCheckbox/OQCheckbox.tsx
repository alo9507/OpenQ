import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OQCheckboxStyle from "./OQCheckboxStyle";

interface OQCheckboxProps {
  label: string;
}

const OQCheckbox = (props: any) => {
  const classes = OQCheckboxStyle();

  return (
    <FormControlLabel
      control={
        <Checkbox
          classes={{
            checked: classes.checked,
            colorPrimary: classes.colorPrimary,
          }}
          checked={props.input.checked ? true : false}
          onChange={props.input.onChange}
          color="primary"
        />
      }
      label={props.label}
    />
  );
};

export default OQCheckbox;
