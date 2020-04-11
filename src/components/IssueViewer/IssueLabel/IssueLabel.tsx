import React from "react";
import IssueLabelProps from "./IssueLabelProps";
import Chip from "@material-ui/core/Chip";

import { contrast, lightenDarkenColor } from "./ContrastCalculator";

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
          color: `${contrast(props.label.color)}`,
          padding: "15px",
          fontSize: "20px",
          margin: "5px",
          border: `solid 2px #${lightenDarkenColor(props.label.color, -20)}`,
        }}
      />
    );
  } else {
    return (
      <Chip
        label={props.label.name}
        style={{
          backgroundColor: `#${props.label.color}`,
          color: `${contrast(props.label.color)}`,
          padding: "15px",
          fontSize: "20px",
          margin: "5px",
          border: `solid 2px #${lightenDarkenColor(props.label.color, -20)}`,
        }}
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={
          <div
            style={{ color: `${contrast(props.label.color)}`, opacity: 0.5 }}
          >
            {props.label.totalCount}
          </div>
        }
      />
    );
  }
};

export default IssueLabel;
