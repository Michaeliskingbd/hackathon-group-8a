import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllCou from "./components/AllCou";
import Courses2A from "./components/Courses2A";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      {/* <Route path="/instructors" element={<Instructors />} />
      <Route path="/aboutPage" elements={<About />} /> */}
      <Route path="/All" element={<AllCou />} />
      <Route path="/cour2" element={<Courses2A />} />
    </Routes>
  );
};

export default App;
