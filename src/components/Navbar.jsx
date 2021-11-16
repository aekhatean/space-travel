import React from "react";

// Import assets
import logo from "../assets/shared/logo.svg";

export default function Navbar() {
  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space-travel logo" />
      </div>
      {/* <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li className="active">
            <a
              className="ff-sans-cond uppercase letter-spacing-2 txt-white"
              href="/"
            >
              <span>00</span>
              Home
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase letter-spacing-2 txt-white"
              href="/"
            >
              <span>01</span>
              Destination
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase letter-spacing-2 txt-white"
              href="/"
            >
              <span>02</span>
              Crew
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase letter-spacing-2 txt-white"
              href="/"
            >
              <span>03</span>
              Technology
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
