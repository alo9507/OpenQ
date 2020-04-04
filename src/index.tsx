import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./components/Landing/Landing";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import RepoHome from "./components/RepoHome/RepoHome";

import ProfileBuilder from "./components/ProfileBuilder/ProfileBuilder";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

const routing = (
  <Router>
    <ApolloProvider client={client}>
      <Route exact path="/:repoOwner/:repoName" component={RepoHome} />
      <Route
        exact
        path="/:repoOwner/:repoName/quiz"
        component={ProfileBuilder}
      />
      <Route exact path="/" component={Landing} />
    </ApolloProvider>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
