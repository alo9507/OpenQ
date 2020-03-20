import React from "react";

function GetStoryButton(props: any) {
  return <button onClick={() => props.callback()}>Get Story</button>;
}

export default GetStoryButton;
