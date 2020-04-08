import React, { useState } from "react";
import { OQCheckbox } from "../../../../core";
import { FormControl } from "@material-ui/core";

import { useCheckboxInput } from "../../../../../hooks";

const QuestionCardMultiselect = (props: any) => {
  return (
    <form noValidate autoComplete="off">
      <FormControl>
        <OQCheckbox
          label="Answer 1"
          input={{
            ...useCheckboxInput(),
          }}
        />
        <OQCheckbox
          label="Answer 1"
          input={{
            ...useCheckboxInput(),
          }}
        />
      </FormControl>
    </form>
  );
};

export default QuestionCardMultiselect;
