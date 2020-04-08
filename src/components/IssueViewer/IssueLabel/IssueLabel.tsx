import React from "react";
import IssueLabelStyles from "./IssueLabelStyle";
import IssueLabelProps from "./IssueLabelProps";

const IssueLabel = (props: IssueLabelProps) => {
  const { label } = IssueLabelStyles(props);
  return <div className={label}>{props.label.name}</div>;
};

export default IssueLabel;
