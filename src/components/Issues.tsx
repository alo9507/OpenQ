import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// Components
import IssueDescription from "./IssueDescription";

// DataStructures
import IssuePriorityQueue from "../models/IssuePriorityQueue";
import Issue from "../models/Issue";

function Issues(props: any) {
  const { data, loading, error } = useQuery(GET_OPEN_ISSUES);

  const openIssuesCount = data.repository.issues.totalCount;

  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const pq = new IssuePriorityQueue(issues);
  const [currentIssue, setCurrentIssue] = useState<Issue | null>(pq.pop());

  // must move this a level higher
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>There are {openIssuesCount} open issues that could use your help!</h1>
      <button onClick={() => setCurrentIssue(pq.pop())}>Get Story</button>
      <br />
      {currentIssue == null ? (
        <h1>No More Stories</h1>
      ) : (
        <IssueDescription issue={currentIssue} />
      )}
    </>
  );
}

export default Issues;

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
