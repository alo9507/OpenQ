import React from "react";
import SubmitProfileButton from "./SubmitProfileButton";
import QuestionCard from "./QuestionCard";

// Takes in Questions and a completion callback which accepts the questions back
// Question format?
export default function SurveySlider(props: any) {
  function submitProfilePressed(msg: string) {
    props.history.push("/diez/diez");
  }

  function questionAnswered(event: any) {
    window.scroll({
      top: 500,
      left: 100,
      behavior: "smooth",
    });
    // setInput({
    //   ...input,
    //   [event.currentTarget.name]: event.currentTarget.value,
    // });
  }

  return (
    <>
      <QuestionCard id="question1" />
      <QuestionCard id="question2" />
      <SubmitProfileButton callback={submitProfilePressed} />
    </>
  );
}
