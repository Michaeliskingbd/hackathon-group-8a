import React from "react";

const SubMain = () => {
  return (
    <section className="py-28 pl-10 bg-[#ecf0f2]">
      <article className=" flex items-center mb-20">
        <div className="flex-[50%]">
          <h1 className="text-5xl w-96 font-semibold leading-[1.2]">
            Technologies You Will Learn
          </h1>
        </div>
        <div className="flex flex-[50%] gap-6 p-[40px]">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/html5.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/css3.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/js.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/node-js.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/vuejs.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/react.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/python.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/angular.svg"
            alt=""
          />
        </div>
      </article>

      <article className="flex mb-20">
        <div className="flex-[30%] space-y-3">
          <h5 className="font-semibold text-lg">Top Categories</h5>
          <h2 className="font-bold text-4xl">Popular Courses</h2>
        </div>
        <div className="flex-[50%] ">
          <p className="border-l-2 border-orange-400 pl-10 h-20 text-lg w-[580px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="flex-[20%]">
          <button className="bg-orange-400 transition-all duration-150 ease-in hover:bg-[#007991] text-white px-6 py-2 rounded-3xl">
            VIEW ALL COURSES
          </button>
        </div>
      </article>

      <article className="grid grid-cols-3">
        <div className="w-[375px] h-[445px] border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-4xl">HTML5/CSS3 Essentials</h3>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>

            <button className="bg-blue-500 hover:bg-blue-600 hover:border-[1px] hover:border-black w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
              See more...
            </button>
          </div>
        </div>

        <div className="w-[375px] h-[445px] border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/wordpress.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-3xl">WordPress Basic Tutorial</h3>
            <p className="text-base">
              Repellat perspiciatis cum! Doloremque ea viverra.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 hover:border-[1px] hover:border-black w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
              See more...
            </button>
          </div>
        </div>

        <div className="w-[375px] h-[445px] border-2 bg-white">
          <img
            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/ecommerce.jpg"
            alt=""
          />
          <div className="px-5 py-7 space-y-5">
            <h3 className="font-semibold text-4xl">E-Commerce Course</h3>
            <p className="text-base">
              Ut ullamcorper viverra neque a porttitor.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 hover:border-[1px] hover:border-black w-full px-6 py-2 rounded-lg text-white font-medium text-sm">
              See more...
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SubMain;
