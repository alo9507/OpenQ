import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Home.css";
import { Header, Footer } from "../Layouts";

import Grid from "@material-ui/core/Grid";

function Home(props: any) {
  const [input, setInput] = useState<any>({});

  const handleInputChange = (e: any) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <div className="Home">
      <Header />
      <div>
        <label>Repo Owner:</label>
        <input
          autoComplete="off"
          type="text"
          name="repoOwner"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Repo Name:</label>
        <input
          autoComplete="off"
          type="text"
          name="repoName"
          onChange={handleInputChange}
        />
      </div>
      <h1>
        <Link to={`/${input.repoOwner}/${input.repoName}`}>
          See OpenQ for {input.repoOwner} {input.repoName}
        </Link>
      </h1>
      <Footer />
    </div>
  );
}

export default Home;
