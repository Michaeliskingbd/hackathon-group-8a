import React from "react";
import EmailSecH from "../components/EmailSecH";
import HackFooter from "../components/HackFooter";
import MainHome from "../components/MainHome";
import SubMain from "../components/SubMain";
import Sub2 from "../components/Sub2";
import AddMain from "../components/AddMain";

const Home = () => {
  return (
    <div className="selection:bg-orange-400">
      <MainHome />
      <SubMain />
      <Sub2 />
      <AddMain />
      <EmailSecH />
      <HackFooter />
    </div>
  );
};

export default Home;
