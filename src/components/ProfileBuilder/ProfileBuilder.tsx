import React from "react";
import {
  ProgrammingLanguages,
  SkillLevel,
  AreaOfInterest,
} from "../../models/Profile";

import { LayoutWrapper } from "../core";
import { Grid } from "@material-ui/core";
import SurveySlider from "./SurveySlider";
import Question from "./models/Question";
import QuestionCardType from "./QuestionCard/QuestionCardType";

export const ProfileBuilder: React.FC<any> = (props) => {
  let preferredLanguages: Question = {
    type: QuestionCardType.multiselect,
    matchCategory: SkillLevel.beginner,
    question: "What are your preferred programming langauges?",
    answers: [
      { name: ProgrammingLanguages.swift, label: "Swift" },
      { name: ProgrammingLanguages.javaScript, label: "JavsScript" },
    ],
  };

  let areasOfInterest: Question = {
    type: QuestionCardType.multiselect,
    matchCategory: SkillLevel.beginner,
    question: "What aspects of software development get you the most excited?",
    answers: [
      { name: AreaOfInterest.ux, label: "UX" },
      { name: AreaOfInterest.frontend, label: "Front of frontend (CSS, SVG)" },
      { name: AreaOfInterest.frontend, label: "Back of frontend (webpack)" },
      { name: AreaOfInterest.backend, label: "Front of backend (API)" },
      { name: AreaOfInterest.backend, label: "Back of backend (Databases)" },
    ],
  };

  let skillLevel: Question = {
    type: QuestionCardType.multiselect,
    matchCategory: SkillLevel.beginner,
    question:
      "On this project, what level of difficulty would you like your issues?",
    answers: [
      { name: SkillLevel.beginner, label: "Easy" },
      { name: SkillLevel.intermediate, label: "Intermediate" },
      { name: SkillLevel.advanced, label: "Hard" },
    ],
  };

  function surveyComplete(response: any) {
    // This would be ideal...
    // let profile = Profile(response)
    // save profile
    props.history.push("/diez/diez");
  }

  return (
    <LayoutWrapper>
      <Grid
        container
        spacing={1}
        justify="center"
        alignContent="center"
        direction="column"
      >
        <SurveySlider
          questions={[preferredLanguages, areasOfInterest, skillLevel]}
          surveyComplete={surveyComplete}
        />
      </Grid>
    </LayoutWrapper>
  );
};

export default ProfileBuilder;
