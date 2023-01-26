import React from "react";
import { Link } from "react-router-dom";
function Mylearning() {
  return (
    <div className="w-full h-96  border px-10 py-5 mt-7 ">
      <div className="px-5 py-2 flex justify-between ">
        <p className="text-xl font-bold ">My Learning</p>
        <Link to="/Courses">
          {" "}
          <p className="text-green-500 text-md">see all</p>
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <div className="bg-white shadow w-64 h-72 rounded-lg  ">
          <div class="w-full h-32   mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center student-gradient rounded-lg">
            <img src="/blog1.png" className="w-28 h-28" />
          </div>
          <h1 className=" px-5  font-semibold">Engineer</h1>
          <h1 className=" px-7 text-sm  "> web development</h1>

          <div className="bg-gray-100 mt-5  rounded-xl mx-3">
            <p className="w-40 bg-green-600 h-3 rounded-xl" />
          </div>
          <div className="flex items-end  justify-between p-5 ">
            <div>
              <p>40% completed</p>
            </div>
            <div className="flex">
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow w-64 h-72 rounded-lg  ">
          <div class="w-full h-32   mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center student-gradient rounded-lg">
            <img src="/blog3.png" className="w-28 h-28" />
          </div>
          <h1 className=" px-5  font-semibold">Engineer</h1>
          <h1 className=" px-7 text-sm  "> web development</h1>

          <div className="bg-gray-100 mt-5  rounded-xl mx-3">
            <p className="w-40 bg-green-600 h-3 rounded-xl" />
          </div>
          <div className="flex items-end  justify-between p-5 ">
            <div>
              <p>40% completed</p>
            </div>
            <div className="flex">
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow w-64 h-72 rounded-lg  ">
          <div class="w-full h-32   mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center student-gradient rounded-lg">
            <img src="/blog2.png" className="w-28 h-28" />
          </div>
          <h1 className=" px-5  font-semibold">Engineer</h1>
          <h1 className=" px-7 text-sm  "> web development</h1>

          <div className="bg-gray-100 mt-5  rounded-xl mx-3">
            <p className="w-40 bg-green-600 h-3 rounded-xl" />
          </div>
          <div className="flex items-end  justify-between p-5 ">
            <div>
              <p>40% completed</p>
            </div>
            <div className="flex">
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
              <img src="/star.png" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mylearning;
