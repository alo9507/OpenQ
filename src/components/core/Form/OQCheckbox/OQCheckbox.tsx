import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import OQCheckboxStyle from "./OQCheckboxStyle";

interface OQCheckboxProps {
  name: string;
  label: string;
}

const OQCheckbox = (props: any) => {
  const classes = OQCheckboxStyle();
  const [checked, setChecked] = useState(false);

  function onSelect() {
    setChecked(!checked);
    const answer = {};
    answer[props.name] = !checked;
    props.onSelect(answer);
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          classes={{
            checked: classes.checked,
            colorPrimary: classes.colorPrimary,
          }}
          checked={checked}
          onChange={onSelect}
          color="primary"
        />
      }
      label={props.label}
    />
  );
};

export default OQCheckbox;
