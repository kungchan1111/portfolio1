import React from "react";

import about from "../assets/img/about.jpg";
import { introText } from "../constants";

function Intro() {
  return (
    <section id="intro">
      <div className="introInner">
        <h1 className="introTitle">{introText.title}</h1>
        <div className="introLines" aria-hidden="true">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <div className="introText">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div className="introLines bottom" aria-hidden="true">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
