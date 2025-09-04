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
        heading="ABOUT HENRY"
        text={
          <div>
            <br></br>
          <ul>
            <li>Skilled in database-driven website development, web content management</li>
            <li>Proficient in Adobe Creative Suite (Dreamweaver, Acrobat, Photoshop etc) and Microsoft Office</li>
            <li>Strong knowledge of WCAG and AODA accessibility standards, and SEO/web best practices</li>
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
