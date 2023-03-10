import React from "react";
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';

function Whychoose() {
  return (
    <div className=" px-20  md:px-5  py-20 md:py-14 w-full bg-gray-50 ">
      <div>
        <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" flex justify-center items-center flex-col md:mb-14">
          <h1 className="text-4xl  sm:text-2xl md:text-3xl font-extrabold  text-black   ">
          <span className="primaryUser font-normal">| </span>  Why Choose Us
          </h1>
          {/* <div className="border-b-2 border-orange-600 w-72 sm:w-44 pt-1 " /> */}
        </motion.div>
      </div>
      < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} className="flex justify-center items-center w-full sm:flex-wrap md:flex-row sm:mt-5 ">
        <div className="bg-white w-80 h-80  md:w-72 md:h-72 mr-16 sm:mr-0 sm:mb-5  fancy-border-radius  flex justify-center items-center flex-col rounded-lg shadow-lg px-5 ">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-100 font-medium ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 h-80   md:w-72 md:h-72 mr-16 sm:mr-0 sm:mb-5  fancy-border-radius  flex justify-center items-center flex-col rounded-lg border-b-2 border-blue-400 px-5 mt-44 sm:mt-0">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-100 font-medium  ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
        <div className="bg-white w-80 h-80  md:w-72 md:h-72  fancy-border-radius flex justify-center items-center flex-col rounded-lg shadow-lg px-5">
          <div className="bg-gray-200 w-14 h-14 mr-5 rounded-full flex justify-center items-center mb-3 ">
            <img src="arrow.png" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-semibold text-white  mb-1">
              Education
            </h1>
            <p className="text-sm text-gray-100 font-medium  ml-7">
              E-learning is the use of electronic educational technology in
              learning and teaching.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Whychoose;
