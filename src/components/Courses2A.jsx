import React from "react";
import EmailSecH from "./EmailSecH";
import { FaChevronCircleDown, FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import HackFooter from "./HackFooter";
import NavList from "../Utils/NavList";

const Courses2A = () => {
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
            <NavList />
          </ul>

          <button className="text-white lg:flex hidden bg-orange-400 hover:bg-[#007991] px-5 py-2 font-semibold rounded-3xl">
            START LEARNING
          </button>
          <button className="lg:hidden bg-orange-400 Block p-[3px]">
            <IoMdMenu className="text-white w-10 h-8 hover:bg-#007991" />
          </button>
        </div>
      </nav>
      <article className="bg-white w-fit lg:mx-10 mx-7 my-14 lg:pl-[78px] px-5 lg:pr-12 py-14">
        <div className="">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg"
            alt=""
            className=""
          />
          <h4 className="font-bold text-xl py-5">WordPress Basic Tutorial</h4>
          <h2 className="font-bold text-3xl py-5">Course Description</h2>
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
            <li>No prior knowledge is required to sign up for this class.</li>
            <li>
              Complete guidance on all the required installations and
              configuration processes.
            </li>
            <li>
              Guides you through the basic concepts before moving on to more
              advanced concepts.
            </li>
            <li>The lessons are concise and get straight to the point.</li>
          </ul>
          <p>
            Risus vitae laoreet dictum, turpis dolor rhoncus nulla, in placerat
            dolor felis ut mi. Morbi mattis elit eget mauris semper, quis
            ullamcorper velit facilisis.
          </p>
        </div>

        <div className="flex gap-2 lg:flex-row flex-col justify-between pt-[40px] pb-10">
          <h3 className="font-semibold text-center lg:text-3xl text-2xl">
            Course Content
          </h3>

          <button className=" text-white flex justify-center items-center gap-2 bg-orange-300 text-sm px-5 py-3 font-semibold rounded-3xl">
            <IoIosArrowDown />
            Expand All
          </button>
        </div>
        <div className="space-y-5">
          <div className="border-2 p-6 rounded-lg">
            <div className="flex lg:flex-row flex-col justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base">
                  <p>Introduction to WordPress</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div className="flex pl-5 cursor-pointer items-center gap-[5px] text-sm font-semibold text-orange-300">
                <IoIosArrowDown className="text-white bg-orange-300 w-4 h-4 rounded-full" />
                <button>Expand</button>
              </div>
            </div>
          </div>

          <div className="border-2 p-6 rounded-lg">
            <div className="flex lg:flex-row flex-col justify-between ">
              <div className="flex items-center gap-1">
                <FaRegCircle className="text-gray-300 text-xl " />
                <div className="pt-2 text-base">
                  <p>First Steps With WordPress</p>
                  <p className="font-bold text-sm text-gray-400">2 Topics</p>
                </div>
              </div>
              <div className="flex pl-5 cursor-pointer items-center gap-[5px] text-sm font-semibold text-orange-300">
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

export default Courses2A;
