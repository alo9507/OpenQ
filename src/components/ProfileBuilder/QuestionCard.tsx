import React from "react";
import {
  Button,
  TextField,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    marginTop: "50px",
    minHeight: "90vh",
    minWidth: "80vw",
  },
});

// style to take up full page
function QuestionCard(props: any) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography>Previous^</Typography>
      <CardContent>
        <Typography variant="h4">What's your skill level?</Typography>
        <form noValidate autoComplete="off">
          <TextField id="name" label="Name" />
        </form>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => props.onCompletion()}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

export default QuestionCard;
