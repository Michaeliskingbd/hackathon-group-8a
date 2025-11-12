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
import Courses from "./pages/Courses";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Form from "./pages/Form";
import NoticeBoard from "./pages/NoticeBoard";
import Assignment from "./pages/Assignment";
import JobPage from "./pages/JobPage";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/instructor" element={<Instructors />} />
      //Dashboard
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/notice" element={<NoticeBoard />} />
        <Route path="/assignment" element={<Assignment />} />
      </Route>
    </Routes>
  );
};

export default App;
