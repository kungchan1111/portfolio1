import React from "react";
import { skillText } from "../constants";

function Skill() {
  return (
    <section id="skill">
      <div className="skillInner">
        <h2 className="skillTitle">
          Challenge
          <em>나의 도전</em>
        </h2>
        <div className="skillDesc">
          {skillText.map((skill, index) => (
            <div key={index}>
              <span>{index + 1}.</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
