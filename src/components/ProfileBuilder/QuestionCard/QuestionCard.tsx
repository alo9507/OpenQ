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

import QuestionCardType from "./QuestionCardType";
import QuestionCardMultiselect from "./QuestionCards/QuestionCardMultiselect/QuestionCardMultiselect";

interface QuestionCardProps {
  question: string;
  type: QuestionCardType;
  onCompletion: () => void;
}

// style to take up full page
const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const classes = QuestionCardStyles();
  const answer = useFormInput("", "place");
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4">{props.question}</Typography>
        <QuestionCardMultiselect />
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
