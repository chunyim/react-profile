import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const OOPCard = (props) => {
  return (
    <div className="project-card">
    <h2 className="project-title">{props.title}</h2>
    <img src={props.imgsrc} />
    <div className="project-details">
      <p>{props.text}</p>
      <div className="OOPproject-btns">
        <NavLink to={props.github} className="btn">
          Source
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default OOPCard;