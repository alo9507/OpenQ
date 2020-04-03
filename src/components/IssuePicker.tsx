import React, { useState } from "react";

// Components
import IssueDescription from "./IssueDescription";
import GetStoryButton from "./GetStoryButton";

// DataStructures
import Issue from "../models/Issues/Issue";

import Grid from "@material-ui/core/Grid";

function IssuePicker(props: any) {
  const { pq, openIssuesCount, repoName } = props;

  const [currentIssue, setCurrentIssue] = useState<Issue | null>(null);
  const [fresh, setFresh] = useState(true);

  return (
    <Grid container>
      <Grid item xl>
        <h1>
          There{" "}
          {openIssuesCount == 1
            ? `is 1 open issue`
            : `are ${openIssuesCount} open issues`}{" "}
          that {repoName} could use your skills on!
        </h1>
      </Grid>
      <Grid item xl>
        <GetStoryButton callback={() => getStoryPressed()} />
      </Grid>
      <br />

      {/* If it hasn't been clicked yet then don't render the IssueDescription */}
      {currentIssue == null ? (
        fresh ? (
          <h3>Click to get story</h3>
        ) : (
          <h1>No More Stories</h1>
        )
      ) : (
        <IssueDescription issue={currentIssue} style={{ maxWidth: "25%" }} />
      )}
    </Grid>
  );

  function getStoryPressed() {
    setFresh(false);
    setCurrentIssue(pq.pop());
  }
}

export default IssuePicker;
