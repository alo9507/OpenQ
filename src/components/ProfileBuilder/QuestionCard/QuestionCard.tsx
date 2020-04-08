import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import QuestionCardStyles from "./QuestionCardStyles";

import QuestionCardType from "./QuestionCardType";
import QuestionCardMultiselect from "./QuestionCardTypes/QuestionCardMultiselect/QuestionCardMultiselect";

import { Answer } from "../models";

interface QuestionCardProps {
  type: QuestionCardType;
  question: string;
  answers: Answer[];
  onCompletion: (obj: any) => void;
}

// style to take up full page
const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const classes = QuestionCardStyles();
  const [response, setResponse] = useState<any>({});

  function didUpdateAnswer(answer: any) {
    setResponse({ ...response, ...answer });
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4">{props.question}</Typography>
        <QuestionCardMultiselect
          answers={props.answers}
          onSelect={didUpdateAnswer}
        />
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => props.onCompletion(response)}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuestionCard;
