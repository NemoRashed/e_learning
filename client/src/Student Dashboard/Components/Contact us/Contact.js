import React from "react";
import User from "../Main dashboard/User";

function Contact() {
  return (
    <div className="flex flex-col pl-72 pr-10  md:pl-0 md:pr-0">
      <User name={"Contact Us"} />
      <div className="md:px-5">
        <div className="w-full h-20 md:h-28 bg-green-50 rounded-md flex flex-col  px-16 py-4 mx-10  md:px-5 md:py-4 md:mx-0 mt-5">
          <p className="flex items-center">
            <img src="/phone.png" className="w-10 h-10 md:w-8 md:h-8 mr-3" />
            Please contact us by email if you encounter any errors or have any
            questions.
          </p>
        </div>
        <div>
          <form className="px-40 py-5 md:px-5 ">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Full Name
              </label>
              <input
                className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="name"
                type="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Description
              </label>
              <textarea
                className="bg-white border h-32 border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="description"
                type="description"
              />
            </div>
            <div className="flex justify-center  items-center px-20 md:px-10 ">
              <button className="student-gradient  w-full text-white rounded-md py-2 px-4 hover:bg-indigo-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
