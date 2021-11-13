/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";

export default function Numbers() {
  return (
    <div className="numbers-wrapper flex">
      <button className="ff-sans fs-400 txt-white" aria-selected="true">
        1
      </button>
      <button className="ff-sans fs-400 txt-white" aria-selected="false">
        2
      </button>
      <button className="ff-sans fs-400 txt-white" aria-selected="false">
        3
      </button>
    </div>
  );
}
