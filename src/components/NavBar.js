import React from "react";
// Importing links
import { Link } from "react-router-dom";

// Importing Icons
import logo from "../icons/code.svg";

function NavBar() {
  return (
    <div>
      <header className="main-head">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/">
              <h1>
                <span className="myName">Ali</span> Dev
              </h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
