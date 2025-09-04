import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/hkviewforheroimg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Henry Yim's Portfolio</p>
        <h1>Full Stack Website Developer</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/about" className="btn-light">
          About
        </Link>
      </div>
    </div>
  );
};

export default Heroimg;
