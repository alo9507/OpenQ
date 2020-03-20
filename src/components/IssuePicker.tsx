import React, { useState } from "react";

// Components
import IssueDescription from "./IssueDescription";
import GetStoryButton from "./GetStoryButton";

// DataStructures
import Issue from "../models/Issue";

function IssuePicker(props: any) {
  const { pq, openIssuesCount, repoName } = props;

  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);
  const [fresh, setFresh] = useState(true);

  return (
    <>
      <h1>
        There{" "}
        {openIssuesCount == 1
          ? `is 1 open issue`
          : `are ${openIssuesCount} open issues`}{" "}
        that {repoName} could use your skills on!
      </h1>
      <GetStoryButton callback={() => getStoryPressed()} />
      <br />

      {/* If it hasn't been clicked yet then don't render the IssueDescription */}
      {currentIssue == null ? (
        fresh ? (
          <h3>Click to get story</h3>
        ) : (
          <h1>No More Stories</h1>
        )
      ) : (
        <IssueDescription issue={currentIssue} />
      )}
    </>
  );

  function getStoryPressed() {
    setFresh(false);
    setCurrentIssue(pq.pop());
  }
}

export default IssuePicker;
