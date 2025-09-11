import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const DesignCard = (props) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{props.title}</h2>
      <img src={props.imgsrc} />
      <div className="project-details">
        <p>{props.text}</p>
        <div className="designProject-btns">
          {props.view.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
