import React from "react";
import User from "../Main dashboard/User";
import { Link } from "react-router-dom";

function Ebook() {
  return (
    <div className="flex flex-col pl-72 pr-20  md:pl-0 md:pr-0  ">
      <User name={"E-Book"} />
      <div className="px-5">
        <div className="w-[50rem] md:w-full h-20 flex flex-row justify-between mt-10 bg-green-100 rounded-lg items-center px-7 md:px-4 mx-10 md:mx-0 ">
          <div className="flex items-center">
            <img src="/book3.png" className="w-5 h-5   mr-2" />
            <p className="font-semibold md:text-sm">
              Engineering book
              <span className="text-gray-500  font-medium text-sm ml-2">
                by steven
              </span>{" "}
            </p>
          </div>
          <Link to="/DetailBook">
            {" "}
            <div className="w-24 h-7 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg cursor-pointer">
              Read
            </div>
          </Link>
        </div>
        <div className="w-[50rem] md:w-full h-20 flex flex-row justify-between mt-4 bg-green-100 rounded-lg items-center px-7  md:px-4 mx-10  md:mx-0">
          <div className="flex items-center">
            <img src="/book3.png" className="w-5 h-5 mr-2" />
            <p className="font-semibold">
              Engineering book
              <span className="text-gray-500 font-medium text-sm ml-2">
                by steven
              </span>{" "}
            </p>
          </div>
          <Link to="/DetailBook">
            {" "}
            <div className="w-24 h-7 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg cursor-pointer">
              Read
            </div>
          </Link>
        </div>
        <div className="w-[50rem] md:w-full h-20 flex flex-row justify-between mt-4 bg-green-100 rounded-lg items-center px-7  md:px-4 mx-10  md:mx-0">
          <div className="flex items-center">
            <img src="/book3.png" className="w-5 h-5 mr-2" />
            <p className="font-semibold">
              Engineering book
              <span className="text-gray-500 font-medium text-sm ml-2">
                by steven
              </span>{" "}
            </p>
          </div>
          <Link to="/DetailBook">
            {" "}
            <div className="w-24 h-7 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg cursor-pointer">
              Read
            </div>
          </Link>
        </div>
        <div className="w-[50rem] md:w-full h-20 flex flex-row justify-between mt-4 bg-green-100 rounded-lg items-center px-7  md:px-4 mx-10  md:mx-0">
          <div className="flex items-center">
            <img src="/book3.png" className="w-5 h-5 mr-2" />
            <p className="font-semibold">
              Engineering book
              <span className="text-gray-500 font-medium text-sm ml-2">
                by steven
              </span>{" "}
            </p>
          </div>
          <Link to="/DetailBook">
            {" "}
            <div className="w-24 h-7 bg-green-600 rounded-lg flex items-center justify-center text-white text-lg cursor-pointer">
              Read
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ebook;
