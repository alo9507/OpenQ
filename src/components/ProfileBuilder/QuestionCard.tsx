import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { useFormInput } from "../../hooks";

import OQCheckbox from "../Shared/Form/OQCheckbox/OQCheckbox"

const useStyles = makeStyles({
  card: {
    marginTop: "50px",
    minHeight: "90vh",
    minWidth: "80vw",
  },
});

interface QuestionCardProps {
  onCompletion?: () => void;
  id: string;
}

// style to take up full page
const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const classes = useStyles();
  const answer = useFormInput("", "place");
  const [checked, setChecked] = useState(false)
  return (
    <Card className={classes.card}>
      <Typography>Previous^</Typography>
      <CardContent>
        <Typography variant="h4">What's your skill level?</Typography>
        <form noValidate autoComplete="off">
          <TextField id="name" label="Name" {...answer} />
          <OQCheckbox label="MEE" checked={checked} input={{value: checked, onChange: () => setChecked(!checked)}} />
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
