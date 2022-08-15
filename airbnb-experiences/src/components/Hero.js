import React from "react";
import heroPic from "../images/Group.png";

export default function Hero() {
  return (
    <section className="hero">
      <img alt="hero-section" src={heroPic} className="hero-photo" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
