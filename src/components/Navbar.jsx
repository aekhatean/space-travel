import React from "react";

// Import assets
import logo from "../assets/shared/logo.svg";

export default function Navbar() {
  /**
   * handle the action of clicking the nav menu icon
   * by opening the nav menu if it was closed
   * or close it if it was open
   *
   * @param clickEvent
   */
  const toggleMobNavSlide = (clickEvent) => {
    const navMenu = clickEvent.target.nextSibling.firstChild;
    const navMenuButton = clickEvent.target;
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "false") {
      navMenu.setAttribute("data-visible", true);
      navMenuButton.setAttribute("aria-expanded", true);
    } else {
      navMenu.setAttribute("data-visible", false);
      navMenuButton.setAttribute("aria-expanded", false);
    }
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space-travel logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        data-toggle="burger"
        onClick={(event) => {
          toggleMobNavSlide(event);
        }}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
          data-visible="false"
        >
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
      </nav>
    </header>
  );
}
