import React from "react";
import Membership from "../components/membership";
import FaqItem from "../components/FaqItem";
import HackFooter from "../components/HackFooter";

const PricingPage = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Membership />
        <FaqItem />
        <HackFooter />
      </div>
    </>
  );
};

export default PricingPage;
