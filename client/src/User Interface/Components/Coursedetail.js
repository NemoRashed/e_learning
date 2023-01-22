import { useState } from "react";
import {Link } from 'react-router-dom'

function Coursedetail() {
  const [IsOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full  px-20 py-10 sm:px-5 sm:py-10 ">
      <div className="w-full h-72 px-20 py-5 sm:px-5 sm:py-4 seconderUser bg-opacity-10">
        <div className="text-4xl sm:text-xl font-bold">
          Python for Beginners - Learn Programming from scratch
        </div>
        <div className="text-md sm:text-sm  text-gray-600 py-5 sm:py-2">
          Python For Beginners : This course is meant for absolute beginners in
          programming or in python.
        </div>
        <div className="flex  flex-row sm:flex-wrap ">
         
          <div className="flex items-center  flex-row mr-3">
            {" "}
            <img src="/star.png" className="w-4 h-4  sm:w-3 sm:h-3 mr-1" />
            <img src="/star.png" className="w-4 h-4  sm:w-3 sm:h-3 mr-1" />
            <img src="/star.png" className="w-4 h-4  sm:w-3 sm:h-3 mr-1" />
            <img src="/star.png" className="w-4 h-4  sm:w-3 sm:h-3 mr-1" />
            <img src="/starEmpty.png" className="w-4 h-4  sm:w-3 sm:h-3" />
          </div>
          <div className="mr-3 text-violet-600 underline sm:text-sm ">(2,3223 rating)</div>
          <div className=" text-gray-600 sm:text-sm sm:py-1"> 654 Students</div>
        </div>
        <div className=" sm:text-sm text-lg">
          Created by{" "}
          <span className="underline text-gray-500">abdi, Developer</span>
        </div>
        <div className="flex items-center mr-3 py-5  sm:py-2">
          <img src="/globe.png" className="w-5 h-5  sm:w-4 sm:h-4 mr-1" />
          English
        </div>
      </div>
      <div  className="flex">
      <div >
      
      <div className="w-full px-32  py-5 sm:px-0 sm:py-10  ">
        <div className="w-full h-52 border px-14 py-5 sm:h-full  sm:px-5 sm:py-10">
          <div className="text-2xl font-semibold mb-5">what you will learn</div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center mb-2">
              <img src="/tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
              
                Lorem ipsum helps them imagine what the lived-in
              </p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <img src="/tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
              
                Lorem ipsum helps them imagine what the lived-in
              </p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <img src="/tick.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-1" />
              <p>
              
                Lorem ipsum helps them imagine what the lived-in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 sm:py-5">
        <div className="font-bold text-2xl sm:text-xl sm:pb-4 pb-7">Course content</div>
        <div className="text-gray-600 text-sm mb-1">
          6 sections • 42 lectures • 2h 36m total length
        </div>
        <div className="border bg-gray-50 w-1/2 h-full sm:w-full cursor-pointer">
          <div className="w-full px-4 py-2 sm:px-2"> 
            <div className="flex justify-between items-center " onClick={() => setIsOpen((prev ) =>!prev)}>
              <div className="flex items-center">
                {!IsOpen ? <img src="/upload.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-3" />
                :<img src="/down-arrow.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> }
              
                <p className="text-lg font-semibold sm:text-sm  ">pythone course </p>
              </div>
              <div className="flex items-center text-sm  ">
                10 lectures  <img src="/dot.png" className="w-2 h-2  sm:w-2 sm:h-2 m-1 mt-3" />40min
              </div>
            </div></div>
            {IsOpen && (
<>
              <div className="w-full h-full bg-white shadow  flex justify-between px-4 py-4 text-sm">
            <div className="flex items-center">
            <img src="/vedio.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> 
            <p>
              introduction
            </p>
            </div>
            <div>
              <p>05:45</p>
            </div>
              </div>
              
            </>
            )}
          
        </div>
        <div className="border bg-gray-50 w-1/2 h-full sm:w-full cursor-pointer">
          <div className="w-full px-4 py-2 sm:px-2"> 
            <div className="flex justify-between items-center " onClick={() => setIsOpen((prev ) =>!prev)}>
              <div className="flex items-center">
                {!IsOpen ? <img src="/upload.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-3" />
                :<img src="/down-arrow.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> }
              
                <p className="text-lg font-semibold sm:text-sm  ">pythone course </p>
              </div>
              <div className="flex items-center text-sm  ">
                10 lectures  <img src="/dot.png" className="w-2 h-2  sm:w-2 sm:h-2 m-1 mt-3" />40min
              </div>
            </div></div>
            {IsOpen && (
<>
              <div className="w-full h-full bg-white shadow  flex justify-between px-4 py-4 text-sm">
            <div className="flex items-center">
            <img src="/vedio.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> 
            <p>
              introduction
            </p>
            </div>
            <div>
              <p>05:45</p>
            </div>
              </div>
              
            </>
            )}
          
        </div>
        <div className="border bg-gray-50 w-1/2 h-full sm:w-full cursor-pointer">
          <div className="w-full px-4 py-2 sm:px-2"> 
            <div className="flex justify-between items-center " onClick={() => setIsOpen((prev ) =>!prev)}>
              <div className="flex items-center">
                {!IsOpen ? <img src="/upload.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-3" />
                :<img src="/down-arrow.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> }
              
                <p className="text-lg font-semibold sm:text-sm  ">pythone course </p>
              </div>
              <div className="flex items-center text-sm  ">
                10 lectures  <img src="/dot.png" className="w-2 h-2  sm:w-2 sm:h-2 m-1 mt-3" />40min
              </div>
            </div></div>
            {IsOpen && (
<>
              <div className="w-full h-full bg-white shadow  flex justify-between px-4 py-4 text-sm">
            <div className="flex items-center">
            <img src="/vedio.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> 
            <p>
              introduction
            </p>
            </div>
            <div>
              <p>05:45</p>
            </div>
              </div>
              
            </>
            )}
          
        </div>
        <div className="border bg-gray-50 w-1/2 h-full sm:w-full cursor-pointer">
          <div className="w-full px-4 py-2 sm:px-2"> 
            <div className="flex justify-between items-center " onClick={() => setIsOpen((prev ) =>!prev)}>
              <div className="flex items-center">
                {!IsOpen ? <img src="/upload.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-3" />
                :<img src="/down-arrow.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> }
              
                <p className="text-lg font-semibold sm:text-sm  ">pythone course </p>
              </div>
              <div className="flex items-center text-sm  ">
                10 lectures  <img src="/dot.png" className="w-2 h-2  sm:w-2 sm:h-2 m-1 mt-3" />40min
              </div>
            </div></div>
            {IsOpen && (
<>
              <div className="w-full h-full bg-white shadow  flex justify-between px-4 py-4 text-sm">
            <div className="flex items-center">
            <img src="/vedio.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> 
            <p>
              introduction
            </p>
            </div>
            <div>
              <p>05:45</p>
            </div>
              </div>
              
            </>
            )}
          
        </div>
        <div className="border bg-gray-50 w-1/2 h-full sm:w-full cursor-pointer">
          <div className="w-full px-4 py-2 sm:px-2"> 
            <div className="flex justify-between items-center " onClick={() => setIsOpen((prev ) =>!prev)}>
              <div className="flex items-center">
                {!IsOpen ? <img src="/upload.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-3" />
                :<img src="/down-arrow.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> }
              
                <p className="text-lg font-semibold sm:text-sm  ">pythone course </p>
              </div>
              <div className="flex items-center text-sm  ">
                10 lectures  <img src="/dot.png" className="w-2 h-2  sm:w-2 sm:h-2 m-1 mt-3" />40min
              </div>
            </div></div>
            {IsOpen && (
<>
              <div className="w-full h-full bg-white shadow  flex justify-between px-4 py-4 text-sm">
            <div className="flex items-center">
            <img src="/vedio.png" className="w-4 h-4  sm:w-4 sm:h-4 mr-3" /> 
            <p>
              introduction
            </p>
            </div>
            <div>
              <p>05:45</p>
            </div>
              </div>
              
            </>
            )}
          
        </div>
        
      </div>
      <div className="w-full py-10 sm:py-5">
        <div className="font-bold text-2xl pb-6 sm:text-xl">Requirements</div>
        <div className="text-sm">
          <div className="flex flex-row items-center  mb-2">
            <img src="/dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
            <p> Lorem ipsum helps them imagine what the lived-in</p>
          </div>
          <div className="flex flex-row items-center mb-2">
            <img src="/dot.png" className="w-3 h-3  sm:w-3 sm:h-3 mr-1" />
            <p> Lorem ipsum helps them imagine what the lived-in</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-full py-10 px-10 sm:px-5 sm:py-5  border bg-gray-50">
        <div className="font-bold text-2xl pb-6">Describtion</div>
        <div className="">
          <h1 className="text-lg text-orange-500 mb-2">python course</h1>
          <p>
            Lorem ipsum helps them imagine what the lived-in website might look
            like. Second, use lorem ipsum if you think the placeholder text will
            be too distracting. For specific projects.Lorem ipsum helps them
            imagine what the lived-in website might look like. Second, use lorem
            ipsum if you think the placeholder text will be too distracting. 
          </p>
        </div>
      </div>
      </div>
      <div className=" w-1/3 py-10  h-full mt-72   absolute ml-[43rem] sm:hidden">
        <div className=" w-full h-full bg-gray-200 rounded-lg ">
        <div className="h-10 hero-gradient text-white font-semibold text-xl flex justify-center items-center ">
            <h1>Preview</h1>
          </div>
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
          <div className="flex justify-between items-center px-10 py-5 mt-6 sm:px-5 sm:py-7 sm:mt-2">
            <div className="  ">
              <p className="w-28 h-10 hero-gradient text-white text-xl font-bold rounded-sm  flex justify-center items-center">
                $ 30
              </p>
            </div>
            <Link to="/Enroll"> <div className="">
            <p className="w-32 h-10 hero-gradient text-white rounded-sm  flex justify-center items-center font-bold text-xl   ">
                Enroll
              </p> 
            </div></Link>
          </div>
        </div>
      </div>
      </div>
      <div className=" w-1/3 py-10  sm:w-full sm:py-5 sm:mt-0 h-full mt-72  lg:hidden sm:block">
        <div className=" w-full h-full bg-gray-200 rounded-lg ">
          <div className="h-10 hero-gradient text-white font-semibold text-xl flex justify-center items-center ">
            <h1>Preview</h1>
          </div>
          <div>
            <video className="w-full h-1/4" controls>
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full  px-10 py-5 sm:px-5 sm:py-3">
            <div className="text-black text-xl  mb-3 font-semibold">
              Course Including
            </div>

            <div className="px-5 sm:px-3">
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
          <div className="flex justify-between items-center px-10 py-5 mt-6 sm:px-5 sm:py-7 sm:mt-2">
            <div className="  ">
              <p className="w-28 h-10 hero-gradient text-white text-xl font-bold rounded-sm  flex justify-center items-center">
                $ 30
              </p>
            </div>
            <Link to="/Enroll">  <div className="">
              <p className="w-32 h-10 hero-gradient text-white rounded-sm  flex justify-center items-center font-bold text-xl   ">
                Enroll
              </p>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursedetail;
