import React from "react";

export default function Star(props) {
    const starIcon = props.isFiled ? "filled-star.png" : "empty-star.png";
  return (
    <img
      alt="star-favorites"
      src={require(`./images/${starIcon}`)}
      className="star"
      onClick={props.handleClick}
    />
  );
}
