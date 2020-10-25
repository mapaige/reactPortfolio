import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return(	<nav className="navbar navbar-expand-lg navbar bg">
  <a className="navbar-brand" href="#"></a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="index.html">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="about.html">
        About
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="portfolio.html">
        Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="contact.html">
        Contact
      </a>
    </li>
  </ul>
</nav>
)
}

export default Nav;