import React from "react";
import { Routes, Route } from "react-router";

import Main from "./components/Main";
import Services from "./components/pages/Service";
import Work from "./components/pages/Work";
import Overview from "./components/pages/Overview";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/overview" element={<Overview />} />
        {/* <Route path="/Panel" element={
            <Adminchk />
          } />
          <Route path="/blog/:title" element={<Blog />} />  */}
      </Routes>
    </>
  );
};

export default App;
