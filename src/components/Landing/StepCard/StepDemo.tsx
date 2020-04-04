import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  demo: {
    minWidth: 275,
  },
});

export default function StepDemo(props: any) {
  const classes = useStyles();

  return <div className={classes.demo}>Step 1</div>;
}
