import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import angular from "../assets/angular.png";
import MongoDB from "../assets/MongoDB_ForestGreen.png";
import expressJS from "../assets/expressnodejs.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a Full Stack Developer using MEAN stack.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={MongoDB} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={angular} className="img" alt="true" />

            {/* <img src={expressJS} className="img" alt="true" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
