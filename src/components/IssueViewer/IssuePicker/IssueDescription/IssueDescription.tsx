import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import IssueDescriptionStyle from "./IssueDescriptionStyle";

function IssueDescription(props: any) {
  const classes = IssueDescriptionStyle();

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
