import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="flex flex-[80%] ">
      <div className=" flex flex-col lg:flex-[50%] w-[100%]  text-black   ">
        <div className="bg-[#007991] lg:w-[90%] lg:h-[180px] h-0  rounded-xl  ">
          <div className="flex">
            <div className="flex flex-col text-black font-semibold lg:text-xl text-l gap-4 lg:p-7 p-0">
              <h2 className="text-2xl font-sans">Welcome back, JANE!</h2>
              <h3>
                You've learned 85% of your goal. <br /> Keep learning and
                improve your overall <br /> results.
              </h3>
            </div>
            <div>
              <img
                className="lg:w-44 h-36 rounded-lg  lg:ml-[350px] ml-5 lg:mt-4 mt-11 flex justify-end items-end "
                src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/instructor-02-free-img.jpg"
                alt=""
              />
            </div>
          </div>
          <section className="lg:flex gap-5 lg:mt-0 mt-4">
            <div className="gap-6 flex flex-col lg:flex-[50%]">
              <div className="  bg-[#007991] lg:h-[40vh] h-[50vh] rounded-xl lg:w-[80%] w-[100%] ">
                <h1 className="text-blue-500 text-xl p-3">My courses</h1>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between m-3">
                    <button>Introduction to HTML</button>
                    <button>100%</button>
                  </div>
                  <div className="flex justify-between m-3">
                    <button>Html tags</button>
                    <button>95%</button>
                  </div>
                  <div className="flex justify-between m-3">
                    <button>Css</button>
                    <span>80%</span>
                  </div>
                  <div className="flex justify-between m-3">
                    <button>Javascript</button>
                    <button>90%</button>
                  </div>
                </div>
              </div>
              <div className="bg-[#007991] w-[80%] rounded-xl p-3 h-24 lg:mb-0 mb-4">
                <div>
                  <button className="flex items-center text-l ">
                    Assignments
                    <FaArrowRightLong className="pl-2 text-xl" />
                  </button>
                  <div>
                    <Link to="/assignment">
                      <button className="bg-[#007991] rounded-lg py-1">
                        Create a simple login page
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-[50%] bg-[#007991] h-[60vh] rounded-xl pt-5">
              <div className="flex justify-between ">
                <p className="pl-4">My Schedule</p>
                <span className="text-blue-400 pr-4">Today</span>
              </div>

              <div className="flex border-[0.5px] border-gray-500 outline-none mt-4 h-9 rounded-lg lg:w-72 lg:ml-5 ml-0 w-0">
                <ul className="flex gap-3 mx-5 text-center ">
                  <li className="hover:text-blue-400">Sun</li>
                  <li className="hover:text-blue-400">Mon</li>
                  <li className="hover:text-blue-400">Tue</li>
                  <li className="hover:text-blue-400">Wed</li>
                  <li className="hover:text-blue-400">Thu</li>
                  <li className="hover:text-blue-400">Fri</li>
                  <li className="hover:text-blue-400">Sat</li>
                </ul>
              </div>

              <div className="mt-14">
                <p className=" ml-3 flex relative">
                  <BsDot className="text-blue-600 text-3xl" /> 9:00AM
                </p>

                <div className="ml-4 relative">
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <h1 className="relative bottom-16 right-0 px-8">
                    Frontend Programming
                  </h1>
                </div>
              </div>
              <div>
                <p className="ml-3 flex">
                  <BsDot className="text-blue-600 text-3xl" /> 11:00AM
                </p>
                <div className="ml-4 relative">
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <p>
                    <BsDot />
                  </p>
                  <h1 className="relative bottom-16 right-0 px-8">
                    Frontend Programming
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
