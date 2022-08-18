import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "rgb(4, 252, 157)" : "rgb(227, 252, 4)",
  };

  return <div style={styles} className="box" onClick={props.handleClick}></div>;
}
