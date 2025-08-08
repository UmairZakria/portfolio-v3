import React from "react";
import SmoothScrollProvider from "../SmoothScrollProvider";
import Navbar from "../Navbar";
import Footer2 from "../Footer2";
import Contact from "../Contact";

const Overview = () => {
  return (
    <SmoothScrollProvider>
      <div className="text-white">
        <Navbar />
        {/* </> */}
        <Contact />
        <Footer2 />
      </div >
    </SmoothScrollProvider>
  );
};

export default Overview;
