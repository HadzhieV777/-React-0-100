import React from "react";
import logo from "../logo.svg";

// JSX returns plain JS objects
export default function NavBar() {
    return (
     <header>
         <nav className="nav-bar">
        <img src={logo} width="60px" alt="site-logo" />
        <a  href="#"><h2>ReactFacts</h2></a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
     </header>
    );
  }

