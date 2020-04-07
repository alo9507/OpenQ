import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 70,
    border: 0,
    color: theme.palette.primary.main,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "all 0.6s ease",
    minWidth: "50%",
    "&:hover": {
      boxShadow: "0 10px 5px 2px rgba(255, 105, 135, .3)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
}));

interface GetStartedButtonProps {
  callback: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = (props: any) => {
  const classes = useStyles();
  const { palette } = useTheme();

  return (
    <>
      <Button
        onClick={() => props.callback()}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        Get Started
      </Button>
    </>
  );
};

export default GetStartedButton;
