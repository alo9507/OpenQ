import React, { useState } from "react";

import LayoutWrapper from "../Shared/Layouts/LayoutWrapper";
import { Grid } from "@material-ui/core";
import SurveySlider from "./SurveySlider";

function ProfileBuilder(props: any) {
  const [input, setInput] = useState<any>({});

  return (
    <LayoutWrapper>
      <Grid
        container
        spacing={1}
        justify="center"
        alignContent="center"
        direction="column"
      >
        <SurveySlider />
      </Grid>
    </LayoutWrapper>
  );
}

export default ProfileBuilder;
