import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import Landing from "./components/Landing/Landing/Landing";
import IssueViewer from "./components/IssueViewer/IssueViewer/IssueViewer";
import ProfileBuilder from "./components/ProfileBuilder/ProfileBuilder";

import { ThemeProvider } from "@material-ui/core"

import { theme } from "./style"

import "./style/index.css";

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
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/quiz" component={ProfileBuilder} />
        <Route exact path="/:repoOwner/:repoName" component={IssueViewer} />
      </ThemeProvider>
    </ApolloProvider>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
