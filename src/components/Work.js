import "./WorkCardStyles.css";

import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import OOPCard from "./OOPCards";
import OOPCardData from "./OOPCardData";

const Work = () => {
  return (
    <div className="container">
      <h1 className="project-heading">Web Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              title={val.title}
              imgsrc={val.imgsrc}
              text={val.text}
              view={val.view}
              github={val.github}
            />
          );
        })}
      </div>
      <h1 className="project-heading">OOP Projects</h1>
      <div className="OOPProject-container">
        {OOPCardData.map((val, ind) => {
          return (
            <OOPCard
              key={ind}
              title={val.title}
              imgsrc={val.imgsrc}
              text={val.text}
              // view={val.view}
              github={val.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
