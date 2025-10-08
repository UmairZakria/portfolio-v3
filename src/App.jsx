import React from "react";
import { Routes, Route } from "react-router";

import Main from "./components/Main";
import Services from "./components/pages/Service";
import Work from "./components/pages/Work";
import Overview from "./components/pages/Overview";
import Case from "./components/pages/Casepages/Case";
import CustomScrollbar from "./components/CustomScrollbar";
import Projects from "./components/pages/Projects";
const App = () => {
  return (
    <>
  <CustomScrollbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/CaseStudy/:title" element={<Case />} />


      </Routes>
    </>
  );
};

export default App;
