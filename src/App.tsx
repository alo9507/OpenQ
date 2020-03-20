import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import "./App.css";
import Issues from "./components/Issues";

import IssuePriorityQueue from "./models/IssuePriorityQueue";
import Issue from "./models/Issue";

function App() {
  const { data, loading, error } = useQuery(GET_OPEN_ISSUES);

  // must move this a level higher
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const openIssuesCount = data.repository.issues.totalCount;

  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const pq = new IssuePriorityQueue(issues);

  return (
    <div className="App">
      <Issues pq={pq} openIssuesCount={openIssuesCount} />
    </div>
  );
}

export default App;

const GET_OPEN_ISSUES = gql`
  query {
    repository(owner: "diez", name: "diez") {
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
