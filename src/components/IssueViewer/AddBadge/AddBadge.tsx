import React from "react";

// Material UI
import Typography from "@material-ui/core/Typography";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

// Assets
import { Badge } from "../../../assets";

const useStyles = makeStyles({
  clipboard: {
    cursor: "pointer",
  },
});

function AddBadge(props: any) {
  const classes = useStyles();

  return (
    <>
      <Typography>
        Add an OpenQ badge to your repo to get the right issues to the right
        people
      </Typography>
      <IconButton
        className={classes.clipboard}
        color="primary"
        onClick={() => props.callback()}
      >
        <FileCopyIcon />
      </IconButton>
      <Badge />
    </>
  );
}

export default AddBadge;
