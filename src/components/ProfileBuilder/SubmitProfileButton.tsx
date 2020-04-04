import React from "react";
import Button from "@material-ui/core/Button";

function SubmitProfileButton(props: any) {
  return (
    <Button color="primary" onClick={() => props.callback("from me")}>
      That's Me!
    </Button>
  );
}

export default SubmitProfileButton;
