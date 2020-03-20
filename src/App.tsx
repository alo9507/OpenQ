import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import IssuePriorityQueue from "./models/IssuePriorityQueue";
import Issue from "./models/Issue";
import IssuePicker from "./components/IssuePicker";

import "./App.css";

function App() {
  const { data, loading, error } = useQuery(GET_OPEN_ISSUES, {
    variables: { ownerName: "diez", repoName: "diez" }
  });

  // must move this a level higher
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const openIssuesCount = data.repository.issues.totalCount;
  const repoName = data.repository.name;
  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const pq = new IssuePriorityQueue(issues);

  return (
    <div className="App">
      <IssuePicker
        pq={pq}
        openIssuesCount={openIssuesCount}
        repoName={repoName}
      />
    </div>
  );
}

export default App;

const GET_OPEN_ISSUES = gql`
  query($ownerName: String!, $repoName: String!) {
    repository(owner: $ownerName, name: $repoName) {
      name
      issues(last: 100, states: OPEN) {
        totalCount
        edges {
          node {
            title
            url
            body
            labels(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
