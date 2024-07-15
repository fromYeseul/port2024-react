import React from "react";
import { skillText } from "../constants";

const Skill = () => {
  return (
    <section id="skill">
        <div class="skill__inner">
            <h2 class="skill__title">Challenge <em>나의 도전</em></h2>
            <div class="skill__desc">
                {skillText.map((skill, key) => (
                    <div key={key}>
                        <span>{key+1}</span>
                        <h3>{skill.title[0]}</h3>
                        <p>{skill.desc[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skill