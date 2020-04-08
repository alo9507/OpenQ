import React from "react";
import TextField from "@material-ui/core/TextField";

import OQTextFieldStyle from "./OQTextFieldStyle";

interface FieldState {
  touched: string;
  invalid: string;
  error: string;
}

interface OQTextFieldProps {
  label: string;
  type: string;
  input: string;
  meta: FieldState;
}

const OQTextField = ({
  label,
  type,
  input,
  meta: { touched, invalid, error },
}) => {
  const classes = OQTextFieldStyle();
  return (
    <TextField
      style={{ width: "100%" }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          notchedOutline: classes.notchedOutline,
          focused: classes.cssFocused,
          disabled: classes.disabled,
        },
        className: classes.input,
      }}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          shrink: classes.shrink,
        },
        className: classes.input,
      }}
      label={label}
      margin="normal"
      variant="outlined"
      {...input}
      helperText={touched ? error : ""}
      error={invalid && touched}
      type={type}
    />
  );
};

export default OQTextField;
