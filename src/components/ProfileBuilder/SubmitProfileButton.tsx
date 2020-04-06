import React from "react";
import Button from "@material-ui/core/Button";

interface SubmitProfileButtonProps {
  callback: (arg0: string) => void;
}

const SubmitProfileButton: React.FC<any> = (props) => {
  return (
    <Button color="primary" onClick={() => props.callback("from me")}>
      That's Me!
    </Button>
  );
};

export default SubmitProfileButton;
