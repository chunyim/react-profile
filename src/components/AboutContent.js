import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import angular from "../assets/angular.png";
import MongoDB from "../assets/MongoDB_ForestGreen.png";

const AboutContent = () => {
  const resumeUrl = "/chunhin_resume.pdf";

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "chunhin_resume.pdf";
    link.click();
    console.log(resumeUrl);
  };

  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Full Stack Developer -- MEAN stack</p>
        <p>Programming languages including: <br/>
         HTML, CSS, JavaScript, TypeScript, Express, Angular, Node, MySQL, Oracle SQL, MongoDB,
          Python, C#, and Java
        </p>
        <button className="btn" onClick={downloadResume}>
          My Resume
        </button>
        {/* </Link> */}
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
