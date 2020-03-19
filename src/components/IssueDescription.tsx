import React from "react";

function IssueDescription(props: any) {
  const issue = props.issue;

  return (
    <>
      <a href={issue.url}>{issue.title}</a>
      <p>{issue.body}</p>
      {issue.labels.map((label: any, index: number) => (
        <p key={index}>{label}</p>
      ))}
    </>
  );
}

export default IssueDescription;
