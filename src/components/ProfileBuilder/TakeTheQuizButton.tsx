import React from "react";
import Button from "@material-ui/core/Button";

function TakeTheQuizButton(props: any) {
  return (
    <Button color="primary" onClick={() => props.callback()}>
      Take the Quiz!
    </Button>
  );
}

export default TakeTheQuizButton;
