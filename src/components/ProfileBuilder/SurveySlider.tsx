import React from "react";
import SubmitProfileButton from "./SubmitProfileButton";
import QuestionCard from "./QuestionCard/QuestionCard";
import { RouteComponentProps, withRouter } from "react-router-dom";
import QuestionCardType from "../ProfileBuilder/QuestionCard/QuestionCardType";

interface SurveySliderProps {
  questions: any;
}

// Takes in Questions and a completion callback which accepts the questions back
// Question format?
const SurveySlider: React.FC<SurveySliderProps & RouteComponentProps> = (
  props
) => {
  function submitProfilePressed(msg: string) {
    props.history.push("/diez/diez");
  }

  function questionAnswered() {
    // progress stepper
    //
  }

  return (
    <>
      <QuestionCard
        question="As a developer, I like to work on..."
        type={QuestionCardType.ranking}
        onCompletion={questionAnswered}
      />
      <QuestionCard
        question="What's you skill level?"
        type={QuestionCardType.radioGroup}
        onCompletion={questionAnswered}
      />
      <SubmitProfileButton callback={submitProfilePressed} />
    </>
  );
};

export default withRouter(SurveySlider);
