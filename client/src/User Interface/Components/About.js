import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center px-20 py-10  sm:px-5  sm:py-7 sm:flex-wrap">
      <div className=" lg:w-1/2 sm:w-full sm:px-2 sm:mr-0 ">
        <div className="mb-10 flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-2xl font-extrabold   ">About</h1>
          <div className="border-b-2 border-orange-600 w-24 sm:w-20 pt-1 " />
        </div>
        <p class="mt-2 text-lg sm:text-md  text-gray-600">
          E-learning is the use of electronic educational technology in learning
          and teaching. Conceptually, e-learning is broadly synonymous with
          instructional technology, information and communication technology.
        </p>
      </div>
      <div className="ml-20 sm:ml-0 sm:mt-7">
        <img
          src="about.png"
          className="w-[32rem] h-[32rem] sm:w-full sm:h-[22rem]"
        />
      </div>
    </div>
  );
}

export default About;
