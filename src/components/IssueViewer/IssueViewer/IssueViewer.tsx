import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { MockQueryReturn } from "../../../models/Mocks";

import { Issue, IssuePriorityQueue } from "../../../models";
import IssuePicker from "../IssuePicker/IssuePicker";

import "./IssueViewer.css";

function IssueViewer(props: any) {
  var repoOwner = props.match.params.repoOwner;
  var repoName = props.match.params.repoName;

  let { data, loading, error } = new MockQueryReturn();

  const query = process.env.REACT_APP_FETCH_LIVE_DATA
    ? GET_OPEN_ISSUES
    : STUB_QUERY;

  const result = useQuery(query, {
    variables: { repoOwner: repoOwner, repoName: repoName },
  });

  if (process.env.REACT_APP_FETCH_LIVE_DATA) {
    data = result.data;
    error = result.error;
    loading = result.loading;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const openIssuesCount = data.repository.issues.totalCount;

  const issues: Issue[] = data.repository.issues.edges.map((node: any) => {
    const issue = new Issue(node.node);
    return issue;
  });

  const pq = new IssuePriorityQueue(issues);

  return (
    <div className="IssueViewer">
      <IssuePicker
        pq={pq}
        openIssuesCount={openIssuesCount}
        repoOwner={repoOwner}
        repoName={repoName}
      />
    </div>
  );
}

export default IssueViewer;

const STUB_QUERY = gql`
  query {
    __schema
  }
`;

const GET_OPEN_ISSUES = gql`
  query($repoOwner: String!, $repoName: String!) {
    repository(owner: $repoOwner, name: $repoName) {
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
