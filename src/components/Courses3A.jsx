import React from "react";
import EmailSecH from "./EmailSecH";
import { FaChevronCircleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import HackFooter from "./HackFooter";

const Courses3A = () => {
  return (
    <section className="bg-[#ecf0f2]">
      <nav className="bg-white flex justify-between items-center px-10 py-5">
        <div>
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
            alt=""
            className="w-44"
          />
        </div>
        <div className="flex gap-6 items-center">
          <ul className="lg:flex gap-6 text-lg text-orange-400 hidden">
            <li>Home</li>
            <li>All Courses</li>
            <li>About Us</li>
            <li>Instructors</li>
            <li>Pricing & FAQ</li>
            <li>Contact</li>
          </ul>

          <button className="text-white lg:flex bg-orange-400 hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl hidden">
            START LEARNING
          </button>
          <IoMdMenu className="lg:hidden bg-orange-400 text-white w-10 h-10 block text-3xl" />
        </div>
      </nav>
      <article className="bg-white w-fit mx-10 my-14 pl-[78px] pr-12 py-24">
        <div className="">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg"
            alt=""
            className=""
          />
          <h4 className="font-bold text-2xl py-5">E-Commerce Course</h4>
          <h2 className="font-bold text-4xl py-5">Course Description</h2>
          <p>
            Repellat perspiciatis cum! Doloremque ea viverra eu doloremque
            tellus aliqua gravida fuga dolorum augue, donec beatae. Class urna
            et doloremque facilisis autem risus fuga nullam quibusdam, tortor
            deleniti, accumsan dolorem? Posuere hac? Tellus maiores ullam
            ullamcorper, nostrud lacinia veniam torquent? Consequuntur a
            lobortis magnam mollis ac, explicabo nobis, pretium omnis, adipisci
            placerat, nostrum reiciendis? Illo natoque provident potenti
            ullamcorper quis hymenaeos lectus nobis nobis dui.
          </p>
          <h4 className="font-bold text-2xl py-5">
            Key Concepts Covered Include:
          </h4>
          <ul className="list-disc list-inside px-6 pb-6">
            <li>What E-Commerce is.</li>
            <li>Understand buyer’s behavior.</li>
            <li>Strategies for Disrupting Industries and Markets.</li>
            <li>Building and launching a store.</li>
          </ul>
          <p className="hidden lg:flex">
            Risus vitae laoreet dictum, turpis dolor rhoncus nulla, in placerat
            dolor felis ut mi. Morbi mattis elit eget mauris semper, quis
            ullamcorper velit facilisis.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between pt-20 pb-10">
          <h3 className="font-semibold text-center text-3xl">Course Content</h3>

          <button className="justify-center text-white flex items-center gap-2 bg-orange-300 text-sm px-5 py-3 font-semibold rounded-3xl">
            <IoIosArrowDown />
            Expand All
          </button>
        </div>
        <div className="space-y-5">
          <div className="border-2 p-6 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base">
                  <p>Defining E-Cmmerce</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                <IoIosArrowDown className="text-white  bg-orange-300 w-4 h-4 rounded-full" />
                <button>Expand</button>
              </div>
            </div>
          </div>

          <div className="border-2 p-6 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base">
                  <p>E-Commerce Marketing</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div className="flex cursor-pointer pl-5 items-center gap-[5px] text-sm font-semibold text-orange-300">
                <IoIosArrowDown className="text-white bg-orange-300 w-4 h-4 rounded-full" />
                <button>Expand</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <EmailSecH />
      <HackFooter />
    </section>
  );
};

export default Courses3A;
