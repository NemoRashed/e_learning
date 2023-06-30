import React from "react";
import {AiFillStar,AiOutlinePlusCircle} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import {Link } from 'react-router-dom';

const Bundle1 = () => {
  return (
    <>
      <div className="border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-center md:gap-6">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-center text-black ">
            <h2 className="text-3xl font-bold mb-20 bg-orange-200 text-primary rounded-md"> Started Bundle </h2>

            <div className="mx-auto container ">
              <div className="flex flex-wrap items-center justify-center">
                {/* Card 1 */}
                <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                  <div>
                    <img
                      src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                      className="w-full h-44 rounded-md"
                    />
                  </div>
                  <div className="rounded-md border border-1-black">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bookmark"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                      <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p className="text-xs text-black">4 Modules</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Course X</h2>
                        <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore, omnis.
                      </p>
                      <div className="flex mt-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Money back grantee{" "}
                          </p>
                        </div>
                        <div className="pl-2">
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Started
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div
                          className="flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm "
                        >
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <BsStarHalf />
                          </p>
                        </div>

                        <div className="bg-indigo-200 rounded-lg px-1">
                          <h3 className="text-black text-xl font-semibold">
                            $350
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 1 Ends */}
                {/* Card 2 */}
                <div className="mx-2 w-72 lg:mb-0 mb-8 ">
                  <div>
                    <img
                      src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                      className="w-full h-44 rounded-md"
                    />
                  </div>
                  <div className="rounded-md border border-1-black">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bookmark"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                      <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p className="text-xs text-black">6 Modules</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">Course YY</h2>
                        <p className="text-xs text-gray-600 pl-5">2 days ago</p>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Inventore, omnis.
                      </p>
                      <div className="flex mt-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Money back grantee{" "}
                          </p>
                        </div>
                        <div className="pl-2">
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Starting Soon
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div
                          className="flex justify-start text-2xl text-yellow-300 md:text-xl 
                                        sm:lg xs:sm "
                        >
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <AiFillStar />
                          </p>
                          <p>
                            <BsStarHalf />
                          </p>
                        </div>

                        <div className="bg-indigo-200 rounded-lg px-1">
                          <h3 className="text-black text-xl font-semibold">
                            $430
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 Ends */}
                <Link to = '/CreateCourse'>
                <div className="rounded-md border border-1-black mt-5 mx-2 w-48 lg:mb-0 mb-8">
                    <div className="flex flex-col items-center justify-between
                     px-2 pt-4 bg-yellow-200">
                    <p className="text-lg text-gray-600 mt-2">
                        Create New Course 
                      </p>
                      <div className="flex my-4 text-4xl text-primary items-center ">
                      <AiOutlinePlusCircle/>
                      </div>
                    </div>
                  </div>
                  </Link>
            </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Bundle1;
