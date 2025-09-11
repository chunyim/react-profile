import "./AboutContentStyles.css";

import React from "react";
import angular from "../assets/angular.png";
import MongoDB from "../assets/MongoDB_ForestGreen.png";
import reactLogo from "../assets/react_logo.png";
import dbLogo from "../assets/dw.png"

const AboutContent = () => {
  const resumeUrl = "/HenryYim_Resume.docx";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "HenryYim_Resume";
    link.click();
  };

  return (
    <div className="about">
      <div className="left">
        <h1>Technical Skills</h1>
        <p>
          Programming languages including: <br />
          HTML, DHTML, CSS, JavaScript, TypeScript, Express, Angular, React,
          Node, MySQL, Oracle SQL, MongoDB, Python, C#, and Java
        </p>
        <p>
          Design software including: Photoshop, Dreamweaver, Figma, Photopea and Acrobat<br />

        </p>
        <button className="btn" onClick={downloadResume}>
          My Resume
        </button>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={reactLogo} className="img" alt="true" />  
            <img src={angular} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={MongoDB} className="img" alt="true" />
            <img src={dbLogo} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
