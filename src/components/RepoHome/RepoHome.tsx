import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import IssuePriorityQueue from "../../models/IssuePriorityQueue";
import Issue from "../../models/Issue";
import IssuePicker from "../IssuePicker";

import "./RepoHome.css";

function RepoHome(props: any) {
  var ownerName = props.match.params.ownerName;
  var repoName = props.match.params.repoName;

  const { data, loading, error } = useQuery(GET_OPEN_ISSUES, {
    variables: { ownerName: ownerName, repoName: repoName }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const openIssuesCount = data.repository.issues.totalCount;

  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const pq = new IssuePriorityQueue(issues);

  return (
    <div className="RepoHome">
      <IssuePicker
        pq={pq}
        openIssuesCount={openIssuesCount}
        repoName={repoName}
      />
    </div>
  );
}

export default RepoHome;

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
