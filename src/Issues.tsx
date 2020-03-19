import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

let count = 0;

function Issues() {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useQuery(GET_ISSUES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const issues = data.repository.issues.edges;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Get Story</button>
      <div>{issues[count].node.title}</div>
    </>
  );
}

export default Issues;

const GET_ISSUES = gql`
  query {
    repository(owner: "diez", name: "diez") {
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
`;
