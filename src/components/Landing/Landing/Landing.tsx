import React from "react";
import { Typography, Grid } from "@material-ui/core";

import "./Landing.css";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import StepCard from "../StepCard/StepCard";
import LayoutWrapper from "../../Shared/Layouts/LayoutWrapper";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface LandingProps {}

const Landing: React.FC<LandingProps & RouteComponentProps> = (props) => {
  function getStartedClicked() {
    props.history.push("/quiz");
  }

  return (
    <LayoutWrapper>
      <Grid container className="Landing" justify="center" spacing={7}>
        <Grid item xs={12}>
          <Typography variant="h1">
            Take your first step into open source
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <StepCard title="Tell Repo Owners what you like to do" />
        </Grid>
        <Grid item xs={12} md={6}>
          <StepCard title="Prioritize issues that are right for you" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">There's no Step 3</Typography>
        </Grid>
        <Grid item xs={12}>
          <GetStartedButton callback={getStartedClicked} />
        </Grid>
      </Grid>
    </LayoutWrapper>
  );
};

export default withRouter(Landing);
