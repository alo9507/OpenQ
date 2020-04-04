import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "25%",
    margin: "0 auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function IssueDescription(props: any) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const issue = props.issue;

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="primary" gutterBottom>
            <Link href={issue.url} color="textSecondary">
              {issue.title}
            </Link>
          </Typography>
          {issue.labels.map((label: any, index: number) => (
            <Typography variant="body2" component="p" key={index}>
              {label}
            </Typography>
          ))}
          <Typography variant="body2" component="p">
            {issue.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">I'll Do It!</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default IssueDescription;
