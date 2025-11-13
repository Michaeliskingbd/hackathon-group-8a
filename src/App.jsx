import React from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Courses from "./pages/Courses";
import JobPage from "./pages/JobPage";
import Form from "./pages/Form";
import NoticeBoard from "./pages/NoticeBoard";
import Assignment from "./pages/Assignment";

import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";

import AllCourses from "./pages/AllCourses";
import Courses3A from "./components/Courses3A";
import CrsExtend from "./Components/CrsExtend";
import HtmlAttb from "./Components/HtmlAttb";
import AnaTag from "./Components/AnaTag";
import SelCss from "./Components/SelCss";
import UiuxExt from "./Components/UiuxExt";
import UiuxExt2 from "./Components/UiuxExt2";
import UiuxExt3 from "./Components/UiuxExt3";
import UiuxExt4 from "./Components/UiuxExt4";
import Csec from "./Components/Csec";
import Csec4 from "./Components/Csec4";
import Csec3 from "./Components/Csec3";
import Csec2 from "./Components/Csec2";
import Instructors from "./pages/Instructors";
import AllCou from "./components/AllCou";
import Courses2A from "./components/Courses2A";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/AllCourses" index element={<AllCourses />} />
      {/* <Route path="/instructors" element={<Instructors />} /> */}
      {/*  <Route path="/aboutPage" elements={<About />} /> */}
      <Route path="/All" element={<AllCou />} />
      <Route path="/pricingPage" element={<PricingPage />} />
      <Route path="/Cou2" element={<Courses2A />} />
      <Route path="/Cou3" element={<Courses3A />} />
      //Extended pages
      <Route path="/Ext" element={<CrsExtend />} />
      <Route path="/Hattb" element={<HtmlAttb />} />
      <Route path="/Atag" element={<AnaTag />} />
      <Route path="/SelCss" element={<SelCss />} />
      <Route path="/UiuxExt" element={<UiuxExt />} />
      <Route path="/UiuxExt2" element={<UiuxExt2 />} />
      <Route path="/UiuxExt3" element={<UiuxExt3 />} />
      <Route path="/UiuxExt4" element={<UiuxExt4 />} />
      <Route path="/Csec" element={<Csec />} />
      <Route path="/Csec2" element={<Csec2 />} />
      <Route path="/Csec3" element={<Csec3 />} />
      <Route path="/Csec4" element={<Csec4 />} />
      <Route path="/" element={<HomePage />} />
      <Route path="instructor" element={<Instructors />} />
      <Route path="contact" element={<Contact />} />
      <Route path="dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="overview" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="resources" element={<Resources />} />
        <Route path="courses" element={<Courses />} />
        <Route path="job" element={<JobPage />} />
        <Route path="form" element={<Form />} />
        <Route path="notice" element={<NoticeBoard />} />
        <Route path="assignment" element={<Assignment />} />
      </Route>
    </Routes>
  );
};

export default App;
