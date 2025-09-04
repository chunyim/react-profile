import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/Heroimg2";
import Work from "../components/Work";

const Design = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="DESIGN"
        text={
          <div>
            <br></br>
            <ul>
              <li>
                Here are some of my works on image editing and graphic design
              </li>
            </ul>
          </div>
        }
      />
      {/* <Work /> */}
      <Footer />
    </div>
  );
};

export default Design;
