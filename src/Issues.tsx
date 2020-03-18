import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

function Issues() {
  const { data, loading, error } = useQuery(GET_ISSUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div>{data}</div>;
}

export default Issues;

const GET_ISSUES = gql`
  {
    query {
      repository(owner: "octocat", name: "Hello-World") {
        issues(last: 20, states: CLOSED) {
          edges {
            node {
              title
              url
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
  }
`;
