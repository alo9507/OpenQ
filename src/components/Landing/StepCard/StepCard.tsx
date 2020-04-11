import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import StepDemo from "./StepDemo";

import StepCardStyle from "./StepCardStyle";

interface StepCardProps {
  title: string;
}

const SimpleCard: React.FC<StepCardProps> = (props) => {
  const { root, title } = StepCardStyle();

  return (
    <Card className={root}>
      <CardContent>
        <Typography className={title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <hr />
        <StepDemo />
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
