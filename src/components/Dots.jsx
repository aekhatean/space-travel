/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";

export default function Dots() {
  return (
    <div className="dots-wrapper flex">
      <button aria-selected="true">
        <span className="sr-only"></span>
      </button>
      <button aria-selected="false">
        <span className="sr-only"></span>
      </button>
      <button aria-selected="false">
        <span className="sr-only"></span>
      </button>
    </div>
  );
}
