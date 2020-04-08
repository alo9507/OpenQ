import { makeStyles } from "@material-ui/core";
import IssueLabelProps from "./IssueLabelProps";

const IssueLabelStyle = makeStyles({
  label: {
    backgroundColor: (props: IssueLabelProps) => `#${props.label.color}`,
    color: "white",
    display: "inline",
    margin: "20px",
    padding: "10px",
    borderRadius: "15px",
    cursor: "default",
  },
});

export default IssueLabelStyle;
