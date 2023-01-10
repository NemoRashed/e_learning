import React from "react";

function Coursedetail() {
  return (
    <div className="w-full  px-20 py-10 sm:px-5 sm:py-10">
      <div className="w-full h-72 px-20 py-10 bg-gray-100">
        <div className="text-4xl font-bold">
          Python for Beginners - Learn Programming from scratch
        </div>
        <div className="text-md text-gray-600 py-5">
          Python For Beginners : This course is meant for absolute beginners in
          programming or in python.
        </div>
        <div className="flex ">
          <div className="flex items-center  flex-row mr-3">
            {" "}
            <img src="star.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <img src="star.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <img src="star.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <img src="star.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <img src="star (1).png" className="w-4 h-4  sm:w-4 sm:h-4" />
          </div>
          <div className="mr-3 text-orange-600 underline">(2,3223 rating)</div>
          <div className=" text-gray-600"> 654 Students</div>
        </div>
        <div>
          Created by{" "}
          <span className="underline text-gray-500">abdi, Developer</span>
        </div>
        <div className="flex items-center mr-3 py-5">
          <img src="globe.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
          English
        </div>
      </div>
      <div className="w-full  px-44 py-5 ">
        <div className="w-full h-52 border px-14 py-5">
          <div className="text-2xl font-semibold mb-5">what you will learn</div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center mb-2">
              <img src="tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
                {" "}
                Lorem ipsum helps them imagine what the lived-in website might
                look like
              </p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <img src="tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
                {" "}
                Lorem ipsum helps them imagine what the lived-in website might
                look like
              </p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <img src="tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
                {" "}
                Lorem ipsum helps them imagine what the lived-in website might
                look like
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="font-bold text-2xl pb-10">Course content</div>
        <div className="text-gray-600">
          6 sections • 42 lectures • 2h 36m total length
        </div>
        <div className="bg-gray-300 w-1/2 h-full">
          <div> jjj</div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="font-bold text-2xl pb-6">Requirements</div>
        <div>
          <div className="flex flex-row items-center mb-2">
            <img src="dot.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <p> Lorem ipsum helps them imagine what the lived-in</p>
          </div>
          <div className="flex flex-row items-center mb-2">
            <img src="dot.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
            <p> Lorem ipsum helps them imagine what the lived-in</p>
          </div>
        </div>
      </div>
      <div className="w-full py-10 px-28 border bg-gray-50">
        <div className="font-bold text-2xl pb-6">Describtion</div>
        <div className="">
          <h1 className="text-lg text-orange-500 mb-2">python course</h1>
          <p>
            Lorem ipsum helps them imagine what the lived-in website might look
            like. Second, use lorem ipsum if you think the placeholder text will
            be too distracting. For specific projects.Lorem ipsum helps them
            imagine what the lived-in website might look like. Second, use lorem
            ipsum if you think the placeholder text will be too distracting. For
            specific projects.Lorem ipsum helps them imagine what the lived-in
            website might look like. Second, use lorem ipsum if you think the
            placeholder text will be too distracting. For specific projects
          </p>
        </div>
      </div>
      <div className=" w-1/3 py-10  h-full ">
        <div className=" w-full h-full bg-gray-200 rounded-lg ">
          <div>
            <video className="w-full h-1/4" controls>
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full  px-10 py-5">
            <div className="text-black text-xl  mb-3 font-semibold">
              Course Including
            </div>

            <div className="px-5">
              <div className="flex items-center flex-row text-sm text-gray-600">
                <img src="dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
                <p>lorem course inslude</p>
              </div>
              <div className="flex items-center flex-row text-sm text-gray-600">
                <img src="dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
                <p>lorem course inslude</p>
              </div>
              <div className="flex items-center flex-row text-sm text-gray-600">
                <img src="dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
                <p>lorem course inslude</p>
              </div>
              <div className="flex items-center flex-row text-sm text-gray-600">
                <img src="dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
                <p>lorem course inslude</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center px-10 py-5 mt-6">
            <div className="  ">
              <p className="w-28 h-10 bg-violet-600 text-white text-xl rounded-full flex justify-center items-center">
                $ 30
              </p>
            </div>
            <div className="">
              <p className="w-32 h-10 bg-orange-400 text-white rounded-sm  flex justify-center items-center font-bold text-xl   ">
                Enroll
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursedetail;
