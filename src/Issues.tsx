import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Issue from "./models/Issue";

function Issues() {
  const { data, loading, error } = useQuery(GET_ISSUES);
  const [count, setCount] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const openIssuesCount = data.repository.issues.totalCount;

  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const issue = issues[count];
  return (
    <>
      <h1>There are {openIssuesCount} open issues that could use your help!</h1>
      <button onClick={() => setCount(count + 1)}>Get Story</button>
      <br />
      <a href={issue.url}>{issue.title}</a>
      <p>{issue.body}</p>
      {issue.labels.map((label: any, index: number) => (
        <p key={index}>{label}</p>
      ))}
    </>
  );
}

export default Issues;

const GET_ISSUES = gql`
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
