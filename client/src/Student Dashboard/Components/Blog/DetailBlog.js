import React from "react";
import User from "../Main dashboard/User";

function DetailBlog() {
  return (
    <div className="flex flex-col pl-72  md:pl-0 md:pr-0  ">
      <User name={"Blog Name"} />
      <div className="w-full  px-20 md:px-5 mt-5 ">
        <div class="w-[50rem]  md:w-full  h-52 md:h-44 mb-6   md:mr-5  flex-shrink-0 flex flex-row justify-center items-center student-gradient rounded-lg">
          <img src="/blog1.png" className="w-44 h-44 md:w-24 md:h-24" />
          <div className="flex flex-col    text-white">
            <span class="font-semibold title-font text-xl">
              Web developemnt
            </span>

            <span class="mt-1 text-sm">12 Jun 2019</span>
          </div>
        </div>
        <div className="text-md w-full px-14 md:px-3   ">
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>
          <p className="mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailBlog;
