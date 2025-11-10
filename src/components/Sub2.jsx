import React from "react";
import { FaCertificate, FaCrown, FaPlay, FaRegClock } from "react-icons/fa";

const Sub2 = () => {
  return (
    <section className="py-16 bg-[#ecf0f2]">
      <article className="relative px-10 flex gap-8 items-center h-96 w-full bg-center bg-cover bg-fixed bg-[url('https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/background1.jpg')]">
        <div className="absolute bg-[#007991] inset-0 opacity-90"></div>
        <div className=" py-32 flex-[22%] z-10">
          <h1 className="text-white font-semibold text-3xl mb-4">Experience</h1>
          <p className="text-white font-lg">
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>

        <div className="px- py-32 flex-[22%] z-10">
          <h1 className="text-white font-semibold text-3xl mb-4">Education</h1>
          <p className="text-white font-lg">
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>

        <div className="px- py-32 flex-[22%] z-10">
          <h1 className="text-white font-semibold text-3xl mb-4">
            Certificate
          </h1>
          <p className="text-white font-lg">
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>

        <div className="bg-white h-[275px] mt-[110px] px-10 py-10 flex-[34%] z-10">
          <div className="space-y-5">
            <h3 className="text-lg font-medium">Study at Your Own Pace</h3>
            <h1 className="text-2xl font-semibold">
              Boost Your Career by Learning Skills in High Demand
            </h1>
          </div>
          <div className="flex items-center pt-12 gap-2 text-base font-semibold hover:text-orange-400">
            <FaPlay className="text-sm p-[2px]" />
            <a href="">GET STARTED</a>
          </div>
        </div>
      </article>

      <article className="flex px-10 py-20">
        <div className="flex-1 space-y-4">
          <h5 className="font-semibold text-lg">Features of Our Courses</h5>
          <h2 className="font-semibold text-5xl">Why choose Us?</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex-1 pl-20">
          <div className="flex gap-5 h-fit w-fit space-y-5 justify-center items-center">
            <div className="bg-orange-400 w-[40px] h-[40px] p-3 text-2xl flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaCrown />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-2xl">Best Industry Leaders</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
          </div>

          <div className="flex gap-5 h-fit w-fit space-y-5 justify-center items-center">
            <div className="bg-orange-400 w-[40px] h-[40px] p-3 text-2xl flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaRegClock />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-2xl">
                Learn Online at Your Own Pace
              </h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
          </div>

          <div className="flex gap-5 h-fit items-center justify-center w-fit space-y-5">
            <div className="bg-orange-400 w-[40px] p-3 h-[40px]  flex items-center justify-center rounded-[100%] text-white hover:text-[#007991]">
              <FaCertificate />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-2xl">Professional Certification</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sub2;
