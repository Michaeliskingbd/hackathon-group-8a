import { Briefcase, Clock, MapPin } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaNairaSign } from "react-icons/fa6";

const JobPage = () => {
  const save = () => {
    alert("saved");
  };

  const click = () => {
    alert("application successful");
  };

  return (
    <section className="space-y-5 ">
      <div className="bg-[#007991] text-center text-2xl rounded-lg ">
        <h2>
          <strong>4 job opportunities</strong> match your skills!
        </h2>
      </div>
      <article className="grid grid-cols-1 m-7 gap-5 lg:grid-cols-2">
        <div className="lg:w-[450px] w-fit border-2 border-gray-300 shadow-lg lg:h-56 rounded-xl p-5 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Frontend Developer</h1>
            <h2 className="bg-orange-500 rounded-xl  w-[100px] text-center">
              90% match
            </h2>
          </div>
          <div className="text-black/70">
            <span>TechCorp</span>
          </div>
          <div className="flex text-black/70 gap-4">
            <span className="flex">
              {" "}
              <MapPin className="text-sm text-gray-400 gap-2" /> Remote
            </span>
            <span className="flex items-center">
              <FaNairaSign /> 300,000-350,000{" "}
            </span>
            <span className="flex">
              <Briefcase /> Full-time
            </span>
          </div>
          <div className="flex">
            <span className="flex text-black/70 gap-3">
              <Clock /> 2 days ago
            </span>
          </div>
          <div className="flex gap-5">
            <Link to="/form">
              <button className="px-4 py-2 text-center rounded-lg bg-[#007991]">
                {" "}
                Apply now
              </button>
            </Link>
            <button
              onClick={save}
              className="px-4 py-2 text-center rounded-lg bg-orange-500"
            >
              Save Job
            </button>
          </div>
        </div>

        <div className="lg:w-[450px] w-fit border-2 border-gray-300 shadow-lg lg:h-56 rounded-xl p-5 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Junior React Developer</h1>
            <h2 className="bg-orange-500 rounded-xl  w-[100px] text-center">
              88% match
            </h2>
          </div>
          <div className="text-black/70">
            <span>StartUpHub</span>
          </div>
          <div className="flex text-black/70 gap-4">
            <span className="flex">
              {" "}
              <MapPin className="text-sm text-gray-400 gap-2" /> Lagos, NG
            </span>
            <span className="flex items-center">
              <FaNairaSign /> 300,000-350,000{" "}
            </span>
            <span className="flex">
              <Briefcase /> Full-time
            </span>
          </div>
          <div className="flex">
            <span className="flex text-black/70 gap-3">
              <Clock /> 1 week ago
            </span>
          </div>
          <div className="flex gap-5">
            <Link to="/form">
              <button className="px-4 py-2 text-center rounded-lg bg-[#007991]">
                {" "}
                Apply now
              </button>
            </Link>
            <button
              onClick={save}
              className="px-4 py-2 text-center rounded-lg bg-orange-500"
            >
              Save Job
            </button>
          </div>
        </div>

        <div className="lg:w-[450px] w-fit border-2 border-gray-300 shadow-lg lg:h-56 rounded-xl p-5 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Web Developer Intern</h1>
            <h2 className="bg-orange-500 rounded-xl  w-[100px] text-center">
              90% match
            </h2>
          </div>
          <div className="text-black/70">
            <span>Appclick ICT</span>
          </div>
          <div className="flex text-black/70 gap-4">
            <span className="flex">
              {" "}
              <MapPin className="text-sm text-gray-400 gap-2" /> Ibadan, NG
            </span>
            <span className="flex items-center">
              <FaNairaSign /> 100,000-130,000{" "}
            </span>
            <span className="flex">
              <Briefcase /> Internship
            </span>
          </div>
          <div className="flex">
            <span className="flex text-black/70 gap-3">
              <Clock /> 3 days ago
            </span>
          </div>
          <div className="flex gap-5">
            <Link to="/form">
              <button className="px-4 py-2 text-center rounded-lg bg-[#007991]">
                {" "}
                Apply now
              </button>
            </Link>
            <button
              onClick={save}
              className="px-4 py-2 text-center rounded-lg bg-orange-500"
            >
              Save Job
            </button>
          </div>
        </div>

        <div className="lg:w-[450px] w-fit border-2 border-gray-300 shadow-lg lg:h-56 rounded-xl p-5 space-y-3">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Fullstack Engineer</h1>
            <h2 className="bg-orange-500 rounded-xl  w-[100px] text-center">
              78% match
            </h2>
          </div>
          <div className="text-black/70">
            <span>CloudTech </span>
          </div>
          <div className="flex text-black/70 gap-4">
            <span className="flex">
              {" "}
              <MapPin className="text-sm text-gray-400 gap-2" /> Remote
            </span>
            <span className="flex items-center">
              <FaNairaSign /> 500,000-540,000{" "}
            </span>
            <span className="flex">
              <Briefcase /> Full-time
            </span>
          </div>
          <div className="flex">
            <span className="flex text-black/70 gap-3">
              <Clock /> 6 days ago
            </span>
          </div>
          <div className="flex gap-5">
            <Link to="/form">
              <button className="px-4 py-2 text-center rounded-lg bg-[#007991]">
                {" "}
                Apply now
              </button>
            </Link>
            <button
              onClick={save}
              className="px-4 py-2 text-center rounded-lg bg-orange-500"
            >
              Save Job
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default JobPage;
