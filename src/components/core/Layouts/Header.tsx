import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props: any) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          <Link
            href="/"
            style={{
              color: `${theme.palette.primary.contrastText}`,
              textDecoration: "none",
            }}
          >
            OpenQ
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
