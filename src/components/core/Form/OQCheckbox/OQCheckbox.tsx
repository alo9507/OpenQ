import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OQCheckboxStyle from "./OQCheckboxStyle";

interface FieldProps {
  value: string | boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

interface OQCheckboxProps {
  input: FieldProps;
  label: string;
  checked: boolean;
}

const OQCheckbox = (props: OQCheckboxProps) => {
  const classes = OQCheckboxStyle();

  return (
    <FormControlLabel
      control={
        <Checkbox
          classes={{
            checked: classes.checked,
            colorPrimary: classes.colorPrimary,
          }}
          checked={props.input.value ? true : false}
          onChange={props.input.onChange}
          color="primary"
        />
      }
      label={props.label}
    />
  );
};

export default OQCheckbox;
