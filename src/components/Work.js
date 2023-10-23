import "./WorkCardStyles.css";

import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

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
    </div>
  );
};

export default Work;
