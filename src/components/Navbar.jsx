import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        <li className="active">
          <a
            className="ff-serif uppercase letter-spacing-2 fs-200 txt-white"
            href="/"
          >
            <span>01</span>
            Active
          </a>
        </li>
        <li>
          <a
            className="ff-serif uppercase letter-spacing-2 fs-200 txt-white"
            href="/"
          >
            <span>02</span>
            Hovered
          </a>
        </li>
        <li>
          <a
            className="ff-serif uppercase letter-spacing-2 fs-200 txt-white"
            href="/"
          >
            <span>03</span>
            Idle
          </a>
        </li>
      </ul>
    </nav>
  );
}
