import React from "react";
import logo from "../images/nav-logo.png"

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="site-logo" className="nav-logo"/>
    </nav>
  );
}
