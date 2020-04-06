import React from "react";
import SubmitProfileButton from "./SubmitProfileButton";
import QuestionCard from "./QuestionCard";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface SurveySliderProps {
  question: any;
}

// Takes in Questions and a completion callback which accepts the questions back
// Question format?
const SurveySlider: React.FC<SurveySliderProps & RouteComponentProps> = (
  props
) => {
  function submitProfilePressed(msg: string) {
    props.history.push("/diez/diez");
  }

  // function questionAnswered(event: any) {
  //   window.scroll({
  //     top: 500,
  //     left: 100,
  //     behavior: "smooth",
  //   });
  //   // setInput({
  //   //   ...input,
  //   //   [event.currentTarget.name]: event.currentTarget.value,
  //   // });
  // }

  return (
    <>
      <QuestionCard id="question1" />
      <QuestionCard id="question2" />
      <SubmitProfileButton callback={submitProfilePressed} />
    </>
  );
};

export default withRouter(SurveySlider);
