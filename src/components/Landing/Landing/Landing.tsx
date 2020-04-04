import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { Header, Footer } from "../../Shared/Layouts";
import "./Landing.css";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

function Landing(props: any) {
  const [input, setInput] = useState<any>({});

  const handleInputChange = (e: any) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  function getStartedClicked() {
    console.log("hi");
  }

  return (
    <div className="Landing">
      <Header />
      <Typography variant="h1">
        Take your first step into open source
      </Typography>
      <GetStartedButton callback={getStartedClicked} />
      <Footer />
    </div>
  );
}

export default Landing;
