import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';
import { cardCourses } from "../../constants";


function Courses() {
  return (
    <div className="w-full py-16  ">
      <div class="text-black  body-font pt-5 ">
        <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
          
         className="w-full  flex justify-center items-center flex-col ">
          <h1 className="text-4xl md:text-3xl font-extrabold pt-4  ">  <span className="primaryUser font-normal">| </span> Our Courses</h1>
          {/* <div className="border-b-2 border-orange-600 w-56  pt-1 " /> */}
        </motion.div>
        < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} class="container md:px-5 px-20 py-14 md:py-10 mx-auto flex justify-between items-center  flex-wrap  sm:flex-col">
          <div class="flex flex-wrap mb-3 w-full ">
            {cardCourses.map((course)=>(
              <div class=" lg:p-4 md:p-0 w-1/3 md:w-full md:mb-6">
              <Link to="Coursedetail">
             
                <div class="h-full  shadow-lg rounded-lg overflow-hidden  border-b-2 border-violet-200">
                  <div class="w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center hero-gradient rounded-lg">
                    <img src={course.img} className="w-32 h-32" />
                    <div className="flex flex-col ml-5 text-white">
                      <span class="font-semibold title-font text-xl">
                       {course.title}
                      </span>

                      <span class="mt-1 text-gray-700 text-sm">
                      {course.date}
                      </span>
                    </div>
                  </div>
                  <div class="p-6">
                    
                    <h1 class="title-font text-2xl font-semibold  primaryUser mb-5">
                    {course.title}
                    </h1>
                    <p class="leading-relaxed mb-3 text-gray-700">
                    {course.description}
                    </p>
                    <div class="flex items-center  flex-row justify-between ">
                      <div className="flex items-center  flex-row">
                        {" "}
                        <img
                          src={course.rate}
                          className="w-5 h-5  md:w-4 md:h-4 mr-1"
                        />
                        <img
                          src={course.rate}
                          className="w-5 h-5  md:w-4 md:h-4 mr-1"
                        />
                        <img
                          src={course.rate}
                          className="w-5 h-5  md:w-4 md:h-4 mr-1"
                        />
                        <img
                          src={course.rate}
                          className="w-5 h-5  md:w-4 md:h-4 mr-1"
                        />
                        <img
                          src={course.rateEmpty}
                          className="w-5 h-5  md:w-4 md:h-4"
                        />
                      </div>
                      <div className="flex items-center  flex-row  seconderUser px-3 py-2  md:px-1 md:py-1 rounded-md">
                        <span class="text-gray-500  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                          <img src="dollar.png " className="w-3 h-3" />
                          {course.price}
                        </span>
                        <span class="text-gray-500 inline-flex items-center leading-none text-sm line-through">
                          <img src="dollar.png " className="w-3 h-3" />
                          {course.oldprice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            ))}
            

           
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Courses;
