import React from "react";
import { FaGreaterThan, FaLessThan, FaRegCircle } from "react-icons/fa";
import { PiGreaterThanLight, PiLessThanLight } from "react-icons/pi";
import CrsNav from "../Utils/CrsNav";
import { RiFileListLine } from "react-icons/ri";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const CrsExtend = () => {
  return (
    <section>
      <CrsNav />
      <article className="flex">
        <div className="w-[350px]  h-[100vh] border-r-[1px] flex-[30%]">
          <div className="flex items-center gap-2 px-5 py-5 text-white bg-orange-300 relative">
            <RiFileListLine className="text-xl" />
            <h4 className="text-lg font-bold">HTML5/CSS3 Essentials</h4>
            <div className="absolute right-[-8px] rounded-full bg-orange-300 p-1">
              <FaLessThan />
            </div>
          </div>
          <div className="px-5 py-4 text-orange-300 space-y-2">
            <div className="flex items-center gap-2">
              <FaRegCircle className="text-lg" />
              <p className="font-bold text-base">Introduction to HTML</p>
            </div>
            <div className="flex items-center gap-1 px-4">
              <IoIosArrowDropupCircle className="text-xl" />
              <span className="font-bold text-sm">2 Topics</span>
            </div>
          </div>
          <div className="px-10 py-5 space-y-1 bg-[#ecf0f2]">
            <div className="flex items-center gap-1">
              <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
              <p className="font-bold text-[12px]">HTML Elements</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
              <p className="font-light text-[12px]">HTML Attributes</p>
            </div>
          </div>

          <div className="px-5 py-4 space-y-2 border-b-[1px]">
            <div className="flex items-center gap-2">
              <FaRegCircle className="text-[#c0c0c1]" />
              <p className="text-base font-thin">
                Introduction and Basics of CSS
              </p>
            </div>
            <div className="flex items-center gap-1 px-5 text-orange-300">
              <IoIosArrowDropdownCircle className="text-xl" />
              <span className="font-bold text-sm">2 Topics</span>
            </div>
          </div>
        </div>

        <div className="px-20 py-7 flex-[70%]">
          <h1 className="font-bold text-[70px] pb-10">HTML Elements</h1>
          <div className="flex items-center gap-1 px-2 py-2 bg-[#ecf0f2] rounded-lg">
            <span className="hover:cursor-pointer text-orange-300 font-bold text-sm">
              HTML5/CSS3 Essentials
            </span>
            <span className="hover:cursor-pointer">
              <PiGreaterThanLight className="text-[8px]" />
            </span>
            <span className="hover:cursor-pointer text-orange-300 font-bold text-sm">
              Introduction to HTML
            </span>
            <span className="hover:cursor-pointer">
              <PiGreaterThanLight className="text-[8px]" />
            </span>
            <span className="hover:cursor-pointer text-orange-300 font-bold text-sm">
              HTML Elements
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CrsExtend;
