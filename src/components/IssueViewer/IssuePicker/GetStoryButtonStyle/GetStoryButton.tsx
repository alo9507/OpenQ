import React from "react";
import Button from "@material-ui/core/Button";
import GetStoryButtonStyle from "./GetStoryButtonStyle";

function GetStoryButton(props: any) {
  const { button } = GetStoryButtonStyle();

  return (
    <Button className={button} onClick={() => props.callback()}>
      Pop an Issue
    </Button>
  );
}

export default GetStoryButton;
