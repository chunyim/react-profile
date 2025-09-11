import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/Heroimg2";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJECT"
        text={
          <div>
            <br></br>
            <ul>
              <li>I can design, develop and maintain websites, </li>
              <li>apart from graphic design and image editing.</li>
              <li>Below are some of my work examples.</li>
            </ul>
          </div>
        }
      ></HeroImg2>
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
