/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";

export default function Tabs() {
  return (
    <div className="tabs-wrapper underline-indicators flex">
      <button
        aria-selected="true"
        className="ff-serif uppercase letter-spacing-2 fs-200 txt-white bg-dark"
      >
        Moon
      </button>
      <button
        aria-selected="false"
        className="ff-serif uppercase letter-spacing-2 fs-200 txt-white bg-dark"
      >
        Mars
      </button>
      <button
        aria-selected="false"
        className="ff-serif uppercase letter-spacing-2 fs-200 txt-white bg-dark"
      >
        Europa
      </button>
    </div>
  );
}
