import React from "react";
import { FaPlay } from "react-icons/fa";

const MainHome = () => {
  return (
    <section className="bg-[#ecf0f2]">
      <article className="relative rounded-br-[150px] h-[150vh] bg-[url('https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute bg-[#007991] inset-0 opacity-85 rounded-br-[150px]"></div>
        <nav className="flex items-center justify-between">
          <div className="z-10">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/logo-retina-free-img.png"
              alt="logo"
              className="w-48 my-7 mx-10"
            />
          </div>
          <div className="flex items-center gap-10 mx-8 z-10">
            <ul className="text-white text-base flex gap-5">
              <li className="hover:cursor-pointer">Home</li>
              <li className="hover:cursor-pointer">All Courses</li>
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Instructors</li>
              <li className="hover:cursor-pointer">Pricing & FAQ</li>
              <li className="hover:cursor-pointer">Contact</li>
            </ul>

            <button className="text-white bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
              START LEARNING
            </button>
          </div>
        </nav>

        <div className="mx-10 my-28 space-y-3">
          <div className="flex items-center gap-2">
            <div className="bg-orange-400 hover:bg-[#007991] z-10 hover:cursor-pointer flex items-center justify-center rounded-full w-4 h-4">
              <FaPlay className="text-xs text-[#007991] hover:text-orange-400 p-[2px]" />
            </div>
            <p className="text-white hover:cursor-pointer z-10 text-base font-thin">
              ON-DEMAND VIDEO TRAINIG
            </p>
          </div>
          <div className="flex">
            <h3 className="text-white z-10 font-semibold text-[85px] leading-[1.2] w-[640px]">
              Education Opens up the Mind
            </h3>
          </div>

          <div className="flex flex-col py-10 space-y-10">
            <p className="z-10 text-white w-[580px] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-10 z-10">
              <button className="text-white bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] py-2 px-7 rounded-3xl text-base font-semibold">
                START COURSE
              </button>
              <div className="flex items-center gap-2 text-white text-base font-semibold hover:text-orange-400">
                <FaPlay className="text-sm p-[2px]" />
                <a href="">ALL COURSES</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MainHome;
