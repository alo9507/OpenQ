import React from "react";
import Button from "@material-ui/core/Button";

function GetStoryButton(props: any) {
  return (
    <Button color="primary" onClick={() => props.callback()}>
      Get Story
    </Button>
  );
}

export default GetStoryButton;