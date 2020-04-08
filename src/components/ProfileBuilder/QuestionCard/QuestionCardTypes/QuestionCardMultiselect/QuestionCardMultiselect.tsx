import React from "react";
import { OQCheckbox } from "../../../../core";
import { FormControl } from "@material-ui/core";

const QuestionCardMultiselect = (props: any) => {
  const answers = props.answers.map((answer, index) => {
    return (
      <FormControl key={index}>
        <OQCheckbox
          label={answer.label}
          name={answer.name}
          onSelect={props.onSelect}
        />
      </FormControl>
    );
  });

  return (
    <form noValidate autoComplete="off">
      {answers}
    </form>
  );
};

export default QuestionCardMultiselect;
