import React from "react";

export default function LargeButton(props) {
  return (
    <a href="/" className="large-button txt-dark bg-white ff-serif uppercase">
      {props.name}
    </a>
  );
}
