import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { makeStyles } from "@material-ui/core"
import theme from "../../../../style/theme"

const useStyle = makeStyles({
  checked: {
    color: "black",
    '&$checked': {
      color: theme.palette.primary.main
    }
  },
  colorPrimary: {
    color: "black"
  }
})

const OQCheckbox = (props: any) => {
    const classes = useStyle()

    return (
        <FormControlLabel
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              colorPrimary: classes.colorPrimary
            }}
            checked={props.input.value ? true : false}
            onChange={props.input.onChange}
            color="primary"
          />}
        label={props.label}
      />
    )
}

export default OQCheckbox
