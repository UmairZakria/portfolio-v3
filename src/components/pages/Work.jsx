import React from "react";
import Navbar from "../Navbar";
import About from "../About";
import Footer2 from "../Footer2";
import SmoothScrollProvider from "../SmoothScrollProvider";
const Work = () => {
  return (
    <SmoothScrollProvider>
      <div className="text-white">
        <Navbar />
        <About />
        <Footer2 />
      </div>
    </SmoothScrollProvider>
  );
};

export default Work;
