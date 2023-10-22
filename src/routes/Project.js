import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/Heroimg2";
import Work from "../components/Work";


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT" text="Here Are My Works"/>
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
