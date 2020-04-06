import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { MockQueryReturn } from "../../../models/Mocks";

import { Issue, IssuePriorityQueue } from "../../../models";
import IssuePicker from "../IssuePicker/IssuePicker";
import LayoutWrapper from "../../Shared/Layouts/LayoutWrapper";
import "./IssueViewer.css";
import { RouteComponentProps, withRouter } from "react-router-dom";

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

  const query = shouldFetchLiveData ? GET_OPEN_ISSUES : STUB_QUERY;

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

  const profile = JSON.parse(localStorage.getItem("profile"));
  const pq = new IssuePriorityQueue(issues, profile);

  return (
    <LayoutWrapper>
      <div className="IssueViewer">
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
