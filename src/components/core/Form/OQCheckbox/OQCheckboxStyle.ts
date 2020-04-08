import { makeStyles } from "@material-ui/core";

const OQCheckboxStyle = makeStyles({
  checked: {
    color: "black",
    "&$checked": {
      color: "green",
    },
  },
  colorPrimary: {
    color: "black",
  },
});

export default OQCheckboxStyle;
