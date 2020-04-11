import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
}));

function Footer(props: any) {
  const theme = useTheme();
  const { root } = useStyles();

  return <footer className={root}>Footer</footer>;
}

export default Footer;
