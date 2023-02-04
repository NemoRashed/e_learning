import React from "react";
import User from "../Main dashboard/User";
import { Link } from "react-router-dom";

function Course() {
  return (
    <div className="flex flex-col pl-72 pr-16   md:pl-0 md:pr-0 ">
      <User name={"My Courses"} />
      <div className=" px-4">
        <div className="w-full h-full    md:px-2 py-5  md:shadow md:rounded-lg  ">
          <div className="flex flex-row justify-between flex-wrap  md:justify-center md:items-cente">
            <Link to="/DetailCourse">
              <div className="bg-white shadow w-64 h-72 rounded-lg mr-4 mb-5 ">
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
            </Link>
            <Link to="/DetailCourse">
              <div className="bg-white shadow w-64 h-72 rounded-lg mr-4 mb-5 ">
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
            </Link>
            <Link to="/DetailCourse">
              <div className="bg-white shadow w-64 h-72 rounded-lg  mb-5 ">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
