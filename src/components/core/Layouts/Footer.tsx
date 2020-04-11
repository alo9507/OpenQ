import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

function Footer(props: any) {
  const { root } = useStyles();

  return <footer className={root}>Footer</footer>;
}

export default Footer;
