import React from "react";

function Whychoose() {
  return (
    <div className=" px-20  sm:px-5  py-20 sm:py-10 w-full bg-gray-50 ">
      <div>
        <div className=" flex justify-center items-center flex-col ">
          <h1 className="text-4xl  sm:text-2xl md:text-3xl font-extrabold  text-black   ">
            Why Choose Us
          </h1>
          <div className="border-b-2 border-orange-600 w-72 sm:w-44 pt-1 " />
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:flex-wrap md:flex-row sm:mt-5 ">
        <div className="bg-white w-80 h-80 mr-16 sm:mr-0 sm:mb-5  fancy-border-radius  flex justify-center items-center flex-col rounded-lg shadow-lg px-5 ">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-700 ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 h-80 mr-16 sm:mr-0 sm:mb-5  fancy-border-radius  flex justify-center items-center flex-col rounded-lg border-b-2 border-orange-400 px-5 mt-44 sm:mt-0">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-700 ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 h-80   fancy-border-radius flex justify-center items-center flex-col rounded-lg shadow-lg px-5">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-700 ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
