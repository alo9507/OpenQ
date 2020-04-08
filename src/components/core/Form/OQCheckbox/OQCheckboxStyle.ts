import { makeStyles } from "@material-ui/core";
import theme from "../../../../style/theme";

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
