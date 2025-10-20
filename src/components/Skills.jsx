import React, { useState } from "react";

const Skills = () => {
  const [tab, setTab] = useState("programming");

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <div className="skills-tabs flex gap-3 mb-5 flex-wrap">
        <button className={`skill-tab ${tab === "programming" ? "active" : ""}`} onClick={() => setTab("programming")}>Programming</button>
        <button className={`skill-tab ${tab === "database" ? "active" : ""}`} onClick={() => setTab("database")}>Database</button>
        <button className={`skill-tab ${tab === "software" ? "active" : ""}`} onClick={() => setTab("software")}>Software Testing</button>
      </div>

      <div className={`${tab !== "programming" ? "hidden" : "skill-content" }`}>
        <div className="skill-chips flex flex-wrap gap-3">
          <span>PHP</span><span>Java</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Laravel</span><span>React</span><span>Node.js</span>
        </div>
      </div>

      <div className={`${tab !== "database" ? "hidden" : "skill-content" }`}>
        <div className="skill-chips flex flex-wrap gap-3">
          <span>MySQL</span><span>SQL</span>
        </div>
      </div>

      <div className={`${tab !== "software" ? "hidden" : "skill-content" }`}>
        <div className="skill-chips flex flex-wrap gap-3">
          <span>SDLC & STLC</span><span>Functional Testing</span><span>Non-Functional Testing</span><span>UAT, SIT, E2E Test</span><span>Regression Testing</span><span>Bug Reporting</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
