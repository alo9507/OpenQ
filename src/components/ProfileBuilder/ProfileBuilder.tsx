import React from "react";

import { LayoutWrapper } from "../core";
import { Grid } from "@material-ui/core";
import SurveySlider from "./SurveySlider";

export const ProfileBuilder: React.FC<any> = (props) => {
  return (
    <LayoutWrapper>
      <Grid
        container
        spacing={1}
        justify="center"
        alignContent="center"
        direction="column"
      >
        <SurveySlider question={{}} />
      </Grid>
    </LayoutWrapper>
  );
};

export default ProfileBuilder;
