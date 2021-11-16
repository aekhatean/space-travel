import React from "react";
import LargeButon from "../components/LargeButton";

export default function Home() {
  return (
    <div className="homepage grid-container grid-container--home">
      <div>
        <h1 className="ff-sans-cond fs-500 txt-light uppercase letter-spacing-1">
          So, you want to travel to{" "}
          <span className="ff-serif fs-900 txt-white d-block">Space</span>
        </h1>{" "}
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>{" "}
      </div>
      <div>
        <LargeButon name="Explore" />
      </div>
    </div>
  );
}
