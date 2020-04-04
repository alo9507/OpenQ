import React from "react";

import SubmitProfileButton from "./SubmitProfileButton";
import QuestionCard from "./QuestionCard";

function ProfileBuilder(props: any) {
  function submitProfilePressed(msg: string) {
    // construct profile
    // save profile to local storage
    props.history.push("/diez/diez");
  }

  function questionAnswered(answer: any) {
    console.log(answer);
  }

  return (
    <>
      <QuestionCard onCompletion={questionAnswered} />
      <QuestionCard onCompletion={questionAnswered} />
      <SubmitProfileButton callback={submitProfilePressed} />
    </>
  );
}

export default ProfileBuilder;
