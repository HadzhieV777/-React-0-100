import React from "react";
import star from "../images/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.course.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.course.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        alt="single-card"
        src={require(`../images/${props.course.coverImg}`)}
        className="card-image"
      />
      <div className="card-stats">
        <img src={star} alt="score" className="card-star" />
        <span>{props.course.stats.rating}</span>
        <span className="gray">({props.course.stats.reviewCount}) •</span>
        <span className="gray">{props.course.location}</span>
      </div>
      <p>{props.course.title}</p>
      <p>
        <span className="bold">From ${props.course.price}</span> / person
      </p>
    </div>
  );
}

// {require('./Image/Checked.png').default}

// 04:41:37
