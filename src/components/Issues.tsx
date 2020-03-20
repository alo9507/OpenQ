import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// Components
import IssueDescription from "./IssueDescription";
import GetStoryButton from "./GetStoryButton";

// DataStructures
import IssuePriorityQueue from "../models/IssuePriorityQueue";
import Issue from "../models/Issue";

function Issues(props: any) {
  const { pq, openIssuesCount } = props;

  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);
  const [fresh, setFresh] = useState(true);

  console.log(pq);

  return (
    <>
      <h1>There are {openIssuesCount} open issues that could use your help!</h1>
      <GetStoryButton callback={() => getStoryPressed()} />
      <br />

      {/* If it hasn't been clicked yet then don't render the IssueDescription */}
      {currentIssue == null ? (
        !fresh ? (
          <h1>No More Stories</h1>
        ) : (
          <h3>Click to get story</h3>
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

export default Issues;
