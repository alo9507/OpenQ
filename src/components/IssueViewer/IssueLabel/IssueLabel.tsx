import React from "react";
import IssueLabelStyles from "./IssueLabelStyle";
import IssueLabelProps from "./IssueLabelProps";
import Chip from "@material-ui/core/Chip";

const IssueLabel = (props: IssueLabelProps) => {
  function handleClick() {}
  function handleDelete() {}

  // const { label } = IssueLabelStyles(props);

  if (props.small) {
    return (
      <Chip
        label={props.label.name}
        style={{
          backgroundColor: `#${props.label.color}`,
          color: "white",
          padding: "15px",
          fontSize: "20px",
          margin: "5px",
        }}
      />
    );
  } else {
    return (
      <Chip
        label={props.label.name}
        style={{
          backgroundColor: `#${props.label.color}`,
          color: "white",
          padding: "15px",
          fontSize: "20px",
          margin: "5px",
        }}
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<div>{props.label.totalCount}</div>}
      />
    );
  }
};

export default IssueLabel;
