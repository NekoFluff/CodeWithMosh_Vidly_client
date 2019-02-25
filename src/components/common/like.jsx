import React, { Component } from "react";

// Input liked: boolean
// Output: onClick

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default Like;