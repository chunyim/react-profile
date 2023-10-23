import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT MYSELF"
        text={
          <div>
            <br></br>
          <p>My career goal involves:</p>
          <ul>
            <li>Pursuing continuous learning</li>
            <li>Staying up-to-date with latest technologies.</li>
            <li>Helping people to solve problems</li>
          </ul>
        </div>
      }
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
