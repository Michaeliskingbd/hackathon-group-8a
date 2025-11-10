import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

const HackFooter = () => {
  return (
    <section className="bg-gradient-to-t from-[#ecf0f2] to-[#fcfafa]">
      <article className="flex py-14 pl-10">
        <div className="flex-[50%] space-y-5">
          <div className="w-48">
            <img
              src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
              alt=""
              className=""
            />
          </div>
          <p className="text-lg pr-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <span className="flex text-2xl gap-4 text-[#007991]">
            <FaFacebookSquare className="hover:text-orange-400 cursor-pointer" />
            <FaSquareXTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaSquareGithub className="hover:text-orange-400 cursor-pointer" />
            <FaInstagramSquare className="hover:text-orange-400 cursor-pointer" />
            <FaYoutube className="hover:text-orange-400 cursor-pointer" />
          </span>
        </div>

        <div className="flex-[25%] px-2">
          <h3 className="font-bold text-2xl py-5">Popular Courses</h3>
          <div className="flex flex-col">
            <a href="" className="hover:text-[#007991]">
              LMS Interactive Content
            </a>
            <a href="" className="hover:text-[#007991]">
              Become a PHP Master
            </a>
            <a href="" className="hover:text-[#007991]">
              HTML5/CSS3 Essentials
            </a>
            <a href="" className="hover:text-[#007991]">
              JavaScript Development
            </a>
            <a href="" className="hover:text-[#007991]">
              WordPress Basic Tutorial
            </a>
            <a href="" className="hover:text-[#007991]">
              Introduction to Coding
            </a>
          </div>
        </div>

        <div className="flex-[25%]">
          <h2 className="font-bold text-2xl py-5">Contact Info</h2>

          <h4 className="font-bold text-lg">Address</h4>
          <p>123 Fifth Avenue, New York, NY 10160</p>

          <h4 className="font-bold text-lg">Phone</h4>
          <p>929-242-6868</p>

          <h4 className="font-bold text-lg">Email</h4>
          <p>contact@info.com</p>
        </div>
      </article>

      <article className="flex justify-between px-10 py-14 border-t-[2px] ">
        <p>Copyright © 2025 Online Courses</p>
        <p>Powered by Online Courses</p>
      </article>
    </section>
  );
};

export default HackFooter;
