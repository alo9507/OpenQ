import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { MockQueryReturn } from "../../../models/Mocks";

import { Issue, IssuePriorityQueue } from "../../../models";
import IssuePicker from "../IssuePicker/IssuePicker";
import { LayoutWrapper } from "../../core";
import "./IssueViewerStyle.ts";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDocumentTitle, useWindowWidth } from "../../../hooks";

import IssueLabel from "../IssueLabel/IssueLabel";
import Label from "../../../models/Issue/Label/Label";

import IssueViewerStyle from "./IssueViewerStyle";

interface IssueViewerProps {}

interface IssueViewerPathVariables {
  repoOwner: string;
  repoName: string;
}

const IssueViewer: React.FC<
  IssueViewerProps & RouteComponentProps<IssueViewerPathVariables>
> = (props) => {
  var repoOwner = props.match.params.repoOwner;
  var repoName = props.match.params.repoName;
  const shouldFetchLiveData = process.env.REACT_APP_FETCH_LIVE_DATA;

  let { data, loading, error } = new MockQueryReturn();

  const { issueViewer, labelContainer } = IssueViewerStyle();

  const query = shouldFetchLiveData ? GET_OPEN_ISSUES : STUB_QUERY;
  const width = useWindowWidth();
  console.log(width);

  useDocumentTitle(`OpenQ | ${repoName}`);

  const result = useQuery(query, {
    variables: { repoOwner: repoOwner, repoName: repoName },
  });

  if (shouldFetchLiveData) {
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

  const labels: Label[] = data.repository.labels.edges.map((node: any) => {
    const label = new Label(node.node);
    return label;
  });
  console.log(labels);

  const labelElements = labels.map((label, index) => {
    return <IssueLabel label={label} small={false} />;
  });

  const profile = JSON.parse(localStorage.getItem("profile"));
  const pq = new IssuePriorityQueue(issues, profile);

  return (
    <LayoutWrapper>
      <div className={issueViewer}>
        <div className={labelContainer}>{labelElements}</div>
        <IssuePicker
          profile={profile}
          pq={pq}
          openIssuesCount={openIssuesCount}
          repoOwner={repoOwner}
          repoName={repoName}
        />
      </div>
    </LayoutWrapper>
  );
};

export default withRouter(IssueViewer);

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
            bodyHTML
            labels(first: 5) {
              edges {
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
      labels(first: 100) {
        edges {
          node {
            name
            color
            issues {
              totalCount
            }
          }
        }
      }
    }
  }
`;
