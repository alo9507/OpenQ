import React, { useState } from "react";
import SubmitProfileButton from "./SubmitProfileButton";
import QuestionCard from "./QuestionCard/QuestionCard";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Question from "./models/Question";

interface SurveySliderProps {
  questions: Question[];
  surveyComplete: (response: any) => void;
}

const SurveySlider: React.FC<SurveySliderProps & RouteComponentProps> = (
  props
) => {
  const [formState, setFormState] = useState({});
  function submitProfilePressed() {
    props.surveyComplete(formState);
  }

  function questionAnswered(response) {
    console.log(response);
    setFormState({ ...formState, ...response });
  }

  const questionCards = props.questions.map((question, index) => {
    return (
      <QuestionCard
        key={index}
        type={question.type}
        question={question.question}
        answers={question.answers}
        onCompletion={questionAnswered}
      />
    );
  });

  return (
    <>
      {questionCards}
      <SubmitProfileButton callback={submitProfilePressed} />
    </>
  );
};

export default withRouter(SurveySlider);
