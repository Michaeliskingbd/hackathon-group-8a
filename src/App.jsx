import React from "react";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllCou from "./components/AllCou";
import Courses2A from "./components/Courses2A";

import AllCourses from "./pages/AllCourses";
import Courses3A from "./components/Courses3A";
import CrsExtend from "./Components/CrsExtend";
import Instructors from "./pages/Instructors";
import PricingPage from "./pages/PricingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />

      <Route path="/AllCourses" index element={<AllCourses />} />
      <Route path="/instructors" element={<Instructors />} />
      {/* <Route path="/aboutPage" elements={<About />} /> */}

      <Route path="/All" element={<AllCou />} />
      <Route path="/pricingPage" element={<PricingPage />} />
      <Route path="/Cou2" element={<Courses2A />} />
      <Route path="/Cou3" element={<Courses3A />} />
      <Route path="/Ext" element={<CrsExtend />} />
    </Routes>
  );
};

export default App;
