import React from "react";
import "./UpdateNewBook.css";

const UpdateNewBook = () => {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
          Find out about events and other news
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />

          <a
            href="#_"
            className=" ml-2 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group p-3 font-semibold rounded-r-lg sm:w-1/3 "
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Subscribe
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdateNewBook;
