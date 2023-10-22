import React from 'react';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/Heroimg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Free feel to contact me."/>
      <Form />
      <Footer />
    </div>  )
}

export default Contact