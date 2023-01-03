import React from "react";

export default function SimpleSlider() {
  return (
    <div className=" w-full ">
      <div className=" w-full h-96 sm:h-72 hero-gradient flex justify-center items-center   ">
        <div>
          <h1 className="text-white text-4xl font-extrabold mb-7 sm:text-3xl sm:font-semibold sm:mb-4">
            Learn without limit . . .
          </h1>
          <input
            value="Searching Courses"
            placeholder="searching"
            className=" w-96 sm:w-72 h-10 rounded-full pl-5 text-gray-400 hover:fuchsia-500"
          />
        </div>
      </div>
    </div>
    // <div class="carousel shadow-2xl bg-white">
    //   <div class="carousel-inner relative overflow-hidden w-full h-[35rem]">
    //     <input
    //       class="carousel-open"
    //       type="radio"
    //       id="carousel-1"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //       checked="checked"
    //     />
    //     <div class="carousel-item absolute opacity-0 h-screen">
    //       <div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
    //         <img src="pic1.jpg" />
    //       </div>
    //     </div>
    //     <label
    //       for="carousel-3"
    //       class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
    //     >
    //       ‹
    //     </label>
    //     <label
    //       for="carousel-2"
    //       class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
    //     >
    //       ›
    //     </label>

    //     <input
    //       class="carousel-open"
    //       type="radio"
    //       id="carousel-2"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //     />
    //     <div class="carousel-item absolute opacity-0 h-screen">
    //       <div class="block h-full w-full bg-orange-500 text-white text-5xl text-center">
    //         <img src="pic2.jpg" />
    //       </div>
    //     </div>
    //     <label
    //       for="carousel-1"
    //       class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
    //     >
    //       ‹
    //     </label>
    //     <label
    //       for="carousel-3"
    //       class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
    //     >
    //       ›
    //     </label>

    //     <input
    //       class="carousel-open"
    //       type="radio"
    //       id="carousel-3"
    //       name="carousel"
    //       aria-hidden="true"
    //       hidden=""
    //     />
    //     <div class="carousel-item absolute opacity-0 h-screen">
    //       <div class="block h-full w-full bg-green-500 text-white text-5xl text-center">
    //         <img src="pic3.jpg" />
    //       </div>
    //     </div>
    //     <label
    //       for="carousel-2"
    //       class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
    //     >
    //       ‹
    //     </label>
    //     <label
    //       for="carousel-1"
    //       class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
    //     >
    //       ›
    //     </label>

    //     <ol class="carousel-indicators">
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-1"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-2"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-3"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //     </ol>
    //   </div>
    // </div>
  );
}
