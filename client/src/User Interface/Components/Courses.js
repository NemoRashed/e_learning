import React from "react";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="w-full  ">
      <div class="text-black  body-font pt-5 ">
        <div className="w-full  flex justify-center items-center flex-col ">
          <h1 className="text-4xl font-extrabold pt-4  ">Our Courses</h1>
          <div className="border-b-2 border-orange-600 w-56  pt-1 " />
        </div>
        <div class="container sm:px-5 px-20 py-14 mx-auto flex justify-between items-center  flex-wrap  sm:flex-col">
          <div class="flex flex-wrap -m-4 mb-3 ">
            <div class="p-4 w-1/3 md:w-full ">
              <Link to="Coursedetail">
                {" "}
                <div class="h-full  shadow-lg rounded-lg overflow-hidden  border-b-2 border-orange-500">
                  <div class="w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                    <img src="blog1.png" className="w-32 h-32" />
                    <div className="flex flex-col ml-5 text-white">
                      <span class="font-semibold title-font text-xl">
                        CATEGORY
                      </span>

                      <span class="mt-1 text-gray-700 text-sm">
                        12 Jun 2019
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-2xl font-semibold  text-orange-500">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center  flex-row justify-between ">
                      <div className="flex items-center  flex-row">
                        {" "}
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star (1).png"
                          className="w-5 h-5  sm:w-4 sm:h-4"
                        />
                      </div>
                      <div className="flex items-center  flex-row ">
                        <span class="text-gray-500  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <img src="dollar.png " className="w-3 h-3" />
                          10.00
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm line-through">
                          <img src="dollar.png " className="w-3 h-3" />
                          15.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="p-4 w-1/3  md:w-full">
              <Link to="Coursedetail">
                {" "}
                <div class="h-full  shadow-lg rounded-lg overflow-hidden  border-b-2 border-orange-500">
                  <div class="w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                    <img src="blog2.png" className="w-32 h-32" />
                    <div className="flex flex-col ml-5 text-white">
                      <span class="font-semibold title-font text-xl">
                        CATEGORY
                      </span>

                      <span class="mt-1 text-gray-700 text-sm">
                        12 Jun 2019
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-2xl font-semibold  text-orange-500">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center  flex-row justify-between ">
                      <div className="flex items-center  flex-row">
                        {" "}
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star (1).png"
                          className="w-5 h-5  sm:w-4 sm:h-4"
                        />
                      </div>
                      <div className="flex items-center  flex-row ">
                        <span class="text-gray-500  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <img src="dollar.png " className="w-3 h-3" />
                          10.00
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm line-through">
                          <img src="dollar.png " className="w-3 h-3" />
                          15.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </Link>
            </div>

            <div class="p-4 w-1/3 md:w-full ">
              <Link to="Coursedetail">
                {" "}
                <div class="h-full  shadow-lg rounded-lg overflow-hidden  border-b-2 border-orange-500">
                  <div class="w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                    <img src="blog3.png" className="w-32 h-32" />
                    <div className="flex flex-col ml-5 text-white">
                      <span class="font-semibold title-font text-xl">
                        CATEGORY
                      </span>

                      <span class="mt-1 text-gray-700 text-sm">
                        12 Jun 2019
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-2xl font-semibold  text-orange-500">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center  flex-row justify-between ">
                      <div className="flex items-center  flex-row">
                        {" "}
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star.png"
                          className="w-5 h-5  sm:w-4 sm:h-4 mr-1"
                        />
                        <img
                          src="star (1).png"
                          className="w-5 h-5  sm:w-4 sm:h-4"
                        />
                      </div>
                      <div className="flex items-center  flex-row ">
                        <span class="text-gray-500  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <img src="dollar.png " className="w-3 h-3" />
                          10.00
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm line-through">
                          <img src="dollar.png " className="w-3 h-3" />
                          15.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
