import { useState } from "react";
import User from "../Main dashboard/User";

function DetailCourse() {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col pl-72   ">
      <User name={"Course Names"} />
      <div className="flex flex-row">
        <div className="w-[70%] h-96 mr-10">
          <video className="w-full h-full" controls>
            <source src="/vedio.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-72 h-screen border ">
          <div className="font-bold px-4 py-3 text-xl">Course Content</div>
          <div
            className="flex flex-row justify-between px-4 py-3 border-2 mt-3 cursor-pointer"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <div>
              <h2 className="font-semibold text-md">
                Section 1: Introduction{" "}
              </h2>
              <p className="text-gray-600">30 min</p>
            </div>
            <div>
              {!IsOpen ? (
                <img
                  src="/upload.png"
                  className="w-3 h-3  sm:w-3 sm:h-3 mr-3"
                />
              ) : (
                <img
                  src="/down-arrow.png"
                  className="w-4 h-4  sm:w-5 sm:h-5 mr-3"
                />
              )}
            </div>
          </div>
          {IsOpen && (
            <>
              <div className="flex flex-col px-5 py-3 border text-gray-600 cursor-pointer">
                <div className=" text-md mb-2">
                  <h2>1. Intoduction</h2>
                </div>
                <div className="flex items-center ml-3">
                  <img src="/vedio.png" className="w-4 h-4 mr-2" />
                  <p className="text-gray-600">30 min</p>
                </div>
              </div>
              <div className="flex flex-col px-5 py-3 border">
                <div className=" text-md mb-2">
                  <h2>2. Requirments</h2>
                </div>
                <div className="flex items-center ml-3">
                  <img src="/vedio.png" className="w-4 h-4 mr-2" />
                  <p className="text-gray-600">60 min</p>
                </div>
              </div>
            </>
          )}
          <div
            className="flex flex-row justify-between px-4 py-3 border-2 cursor-pointer "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div>
              <h2 className="font-semibold text-md">Section 1: Introduction</h2>
              <p className="text-gray-600">30 min</p>
            </div>
            <div>
              {!IsOpen ? (
                <img
                  src="/upload.png"
                  className="w-3 h-3  sm:w-3 sm:h-3 mr-3"
                />
              ) : (
                <img
                  src="/down-arrow.png"
                  className="w-4 h-4  sm:w-5 sm:h-5 mr-3"
                />
              )}
            </div>
          </div>
          {IsOpen && (
            <>
              <div className="flex flex-col px-5 py-3 border text-gray-600">
                <div className=" text-md mb-2">
                  <h2>1. Intoduction</h2>
                </div>
                <div className="flex items-center ml-3">
                  <img src="/vedio.png" className="w-4 h-4 mr-2" />
                  <p className="text-gray-600">30 min</p>
                </div>
              </div>
              <div className="flex flex-col px-5 py-3 border">
                <div className=" text-md mb-2">
                  <h2>2. Requirments</h2>
                </div>
                <div className="flex items-center ml-3">
                  <img src="/vedio.png" className="w-4 h-4 mr-2" />
                  <p className="text-gray-600">60 min</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailCourse;
