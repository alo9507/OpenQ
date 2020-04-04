import React from "react";
import { Button } from "@material-ui/core";

// style to take up full page
function QuestionCard(props: any) {
  return (
    <form>
      <input type="text" />
      <Button onClick={() => props.onCompletion("answer")}>Next</Button>
    </form>
  );
}

export default QuestionCard;
