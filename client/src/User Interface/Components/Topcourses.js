import React from "react";
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';

function Topcourses() {
  return (
    <div className="bg-gray-50 px-20  md:px-5 py-20 mt-14 w-full h-72 md:h-screen flex justify-center items-center flex-col">
     <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
     className="w-full  flex justify-center items-center flex-col ">
        <h1 className="text-3xl font-extrabold pt-4  md:text-2xl ">
          <span className="primaryUser font-normal">| </span> Top Category
        </h1>
        {/* <div className="border-b-2 border-orange-600 w-56  pt-1 " /> */}
        </motion.div>
      < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
      className="w-full flex items-center justify-around py-10  md:flex-wrap">
        <div className="bg-blue-200 w-64 h-20  md:h-16 rounded-lg shadow flex items-center flex-col md:mb-14 ">
          <div className="font-semibold text-lg mt-4 md:mt-2 ">Javascript courses</div>
          <div className="bg-yellow-200 rounded-full w-16 h-16 md:w-14 md:h-14 absolute mt-14  md:mt-11 flex justify-center items-center">
            <img src="icon1.png" className="w-8 h-8  sm:w-4 sm:h-4 mr-1" />
          </div>
        </div>
        <div className="bg-pink-200 w-64 h-20  md:h-16  rounded-lg shadow flex items-center flex-col md:mb-14">
          <div className="font-semibold text-lg mt-4 md:mt-2 ">Javascript courses</div>
          <div className="bg-yellow-200 rounded-full w-16 h-16   md:w-14 md:h-14 absolute mt-14 md:mt-11 flex justify-center items-center">
            <img src="icon2.png" className="w-8 h-8  sm:w-4 sm:h-4 mr-1" />
          </div>
        </div>
        <div className="bg-blue-200 w-64 h-20    md:h-16 rounded-lg shadow flex items-center flex-col md:mb-14">
          <div className="font-semibold text-lg mt-4 md:mt-2 ">Javascript courses</div>
          <div className="bg-yellow-200 rounded-full w-16 h-16  md:w-14 md:h-14 absolute mt-14 md:mt-11 flex justify-center items-center">
            <img src="icon3.png" className="w-8 h-8  sm:w-4 sm:h-4 mr-1" />
          </div>
        </div>
        <div className="bg-pink-200 w-64 h-20  md:h-16 rounded-lg shadow flex items-center flex-col md:mb-14">
          <div className="font-semibold text-lg mt-4  md:mt-2">Javascript courses</div>
          <div className="bg-yellow-200 rounded-full w-16 h-16  md:w-14 md:h-14 absolute mt-14 md:mt-11 flex justify-center items-center">
            <img src="icon4.png" className="w-8 h-8  sm:w-4 sm:h-4 mr-1" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Topcourses;
