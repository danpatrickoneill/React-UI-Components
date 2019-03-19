import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <div className={props.className}>{props.symbol}</div>;
};

export default ActionButton;
