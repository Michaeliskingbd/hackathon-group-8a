import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import images1 from "../assets/img1.jpeg";
import images2 from "../assets/img2.jpeg";
import images3 from "../assets/img3.jpeg";
import images4 from "../assets/img4.jpeg";
import CountUp from "react-countup";
import { Rate } from "antd";

const AddMain = () => {
  return (
    <section className="py-10 pl-10 bg-gradient-to-b from-[#ecf0f2] to-[#fcfafa]">
      <article className="flex lg:flex-row flex-col space-y-14">
        <div className="flex-1 space-y-4">
          <h6 className="font-semibold text-xl">Testimonials</h6>
          <h2 className="font-semibold text-5xl leading-[1.2]">
            Trusted by Thousand of Students and Tutors
          </h2>
        </div>

        <div className="flex-1">
          <div className="flex lg:items-center lg:justify-center gap-4">
            <h1 className="font-bold text-8xl">
              <CountUp
                start={0.0}
                end={4.8}
                duration={10}
                decimals={2}
              ></CountUp>
            </h1>
            <div className="flex flex-col space-y-2">
              <span className="flex text-orange-400 gap-2 text-xs">
                <Rate allowHalf defaultValue={4.5} />
              </span>
              <h4 className="font-semibold text-lg">
                <CountUp start={2394} end={5000} duration={1000}></CountUp>
                Ratings
              </h4>
              <h5 className="font-semibold text-lg">Google Reviews</h5>
            </div>
          </div>
        </div>
      </article>

      <article className="pt-28 pr-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
            <p className="text-base">
              “Massa amet, at dolor tellus pellentesque aenean in eget massa
              tincidunt habitasse volutpat adipiscing sed id sit auctor eu
              vivamus nulla.”
            </p>
            <h4 className="font-semibold text-lg ">Emma Hart</h4>
            <span className="flex text-orange-400 gap-2 text-xs justify-end">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <div className="absolute top-[-100px]">
              <img
                src={images1}
                //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                alt=""
                className="rounded-xl w-20 h20"
              />
            </div>
          </div>

          <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
            <p className="text-base">
              “Ut morbi felis, felis massa quam sit massa, amet, bibendum
              pulvinar elit in adipiscing amet imperdiet ac felis congue enim,
              elementum orci.”
            </p>
            <h4 className="font-semibold text-lg">Eddie Johnson</h4>
            <span className="flex text-orange-400 gap-2 text-xs justify-end">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <div className="absolute top-[-100px]">
              <img
                src={images2}
                //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-02.jpg"
                alt=""
                className="rounded-xl w-20 h20"
              />
            </div>
          </div>

          <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
            <p className="text-base">
              “Donec in varius facilisis justo, curabitur aliquet sit justo sed
              sit interdum diam dolor ornare quis a felis adipiscing hendrerit
              quisque enim.”
            </p>
            <h4 className="font-semibold text-lg">Jonathan Doe</h4>
            <span className="flex text-orange-400 gap-2 text-xs justify-end">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <div className="absolute top-[-100px]">
              <img
                src={images3}
                //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-03.jpg"
                alt=""
                className="rounded-xl w-20 h20"
              />
            </div>
          </div>

          <div className="relative bg-white border pl-10 pt-14 pb-2 pr-1 rounded-2xl space-y-7 mb-20">
            <p className="text-base">
              “Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et,
              a, pulvinar gravida enim in blandit mauris vitae volutpat urna,
              sed justo hendrerit.”
            </p>
            <h4 className="font-semibold text-lg">Mike Edward</h4>
            <span className="flex text-orange-400 gap-2 text-xs justify-end">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <div className="absolute top-[-100px]">
              <img
                src={images4}
                //"https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-04.jpg"
                alt=""
                className="rounded-xl w-20 h20"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AddMain;
