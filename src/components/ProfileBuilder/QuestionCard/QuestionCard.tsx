import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import QuestionCardStyles from "./QuestionCardStyles";

import { useFormInput } from "../../../hooks";

import OQCheckbox from "../../core/Form/OQCheckbox/OQCheckbox";
import OQTextField from "../../core/Form/OQTextField/OQTextField";

interface QuestionCardProps {
  onCompletion?: () => void;
  id: string;
}

// style to take up full page
const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const classes = QuestionCardStyles();
  const answer = useFormInput("", "place");
  const [checked, setChecked] = useState(false);
  return (
    <Card className={classes.card}>
      <Typography>Previous^</Typography>
      <CardContent>
        <Typography variant="h4">What's your skill level?</Typography>
        <form noValidate autoComplete="off">
          <OQTextField
            label={"Label"}
            type={"input"}
            input={"input"}
            meta={{ touched: false, invalid: false, error: false }}
          />
          <OQCheckbox
            label="MEE"
            checked={checked}
            input={{ value: checked, onChange: () => setChecked(!checked) }}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => props.onCompletion()}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuestionCard;
