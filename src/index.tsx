import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink)
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
