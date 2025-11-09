import React from "react";
import { FaGreaterThan, FaLessThan, FaRegCircle } from "react-icons/fa";
import {
  PiGreaterThanBold,
  PiGreaterThanLight,
  PiLessThanBold,
  PiLessThanLight,
} from "react-icons/pi";
import CrsNav from "../Utils/CrsNav";
import { RiFileListLine } from "react-icons/ri";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoMdAlert,
} from "react-icons/io";

const CrsExtend = () => {
  return (
    <section>
      <CrsNav />
      <article className="flex">
        <div className="w-[350px]  h-[100vh] border-r-[1px] flex-[30%]">
          <div className="flex items-center gap-2 px-5 py-5 text-white bg-orange-300 relative">
            <RiFileListLine className="text-xl" />
            <h4 className="text-lg font-bold hover:cursor-pointer">
              HTML5/CSS3 Essentials
            </h4>
            <div className="absolute right-[-8px] rounded-full bg-orange-300 p-1">
              <FaLessThan />
            </div>
          </div>
          <div className="px-5 py-4 text-orange-300 space-y-2">
            <div className="flex items-center gap-2">
              <FaRegCircle className="text-lg" />
              <p className="font-bold text-base hover:cursor-pointer">
                Introduction to HTML
              </p>
            </div>
            <div className="flex items-center gap-1 px-4">
              <IoIosArrowDropupCircle className="text-xl" />
              <span className="font-bold text-sm hover:cursor-pointer">
                2 Topics
              </span>
            </div>
          </div>
          <div className="px-10 py-5 space-y-1 bg-[#ecf0f2]">
            <div className="flex items-center gap-1">
              <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
              <p className="font-bold text-[12px] hover:cursor-pointer">
                HTML Elements
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegCircle className="text-orange-300 bg-white rounded-full font-extrabold" />
              <p className="font-light text-[12px] hover:cursor-pointer">
                HTML Attributes
              </p>
            </div>
          </div>

          <div className="px-5 py-4 space-y-2 border-b-[1px]">
            <div className="flex items-center gap-2">
              <FaRegCircle className="text-[#c0c0c1]" />
              <p className="text-base font-thin hover:cursor-pointer hover:text-orange-300">
                Introduction and Basics of CSS
              </p>
            </div>
            <div className="flex items-center gap-1 px-5 text-orange-300">
              <IoIosArrowDropdownCircle className="text-xl" />
              <span className="font-bold text-sm hover:cursor-pointer">
                2 Topics
              </span>
            </div>
          </div>
        </div>

        <div className="px-14 py-7 flex-[70%]">
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

          <div className="py-4 pl-4 pr-[10px] flex items-center gap-28 rounded-lg border-2 mt-10 border-[#007991]">
            <div className="flex items-center gap-2 text-[#007991]">
              <div className="rounded-full border-[3px] p-[2px] border-[#007991]">
                <IoMdAlert className="text-3xl" />
              </div>
              <p className="text-[16px] font-base">
                Please go back and watch the video for the previous lesson.
              </p>
            </div>
            <button className="flex items-center gap-10 bg-yellow-300 py-[3px] px-[35px] rounded-xl">
              <PiLessThanLight className="text-[10px] font-bold" />
              <span className="font-semibold text-xs">Back</span>
            </button>
          </div>

          <div className="flex items-center justify-between mt-7 py-7 border-t-2">
            <button className="bg-orange-300 flex items-center gap-5 py-[5px] px-[22px] text-white rounded-xl">
              <PiLessThanBold className="text-[10px] font-bold" />
              <span className="text-sm font-bold">Previous Lesson</span>
            </button>

            <button className="bg-orange-300 flex items-center gap-5 py-[5px] px-[22px] text-white rounded-xl">
              <span className="text-sm font-bold">Next Topic</span>
              <PiGreaterThanBold className="text-[10px]" />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CrsExtend;
