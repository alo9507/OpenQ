import React from "react";
import { Button } from "@material-ui/core";
import GetStartedButtonStyle from "./GetStartedButtonStyle";

interface GetStartedButtonProps {
  callback: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = (props: any) => {
  const classes = GetStartedButtonStyle();

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
