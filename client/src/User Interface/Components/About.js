import React from "react";
import { motion } from 'framer-motion';
import { fadeIn, planetVariants} from '../../utils/motion';

function About() {
  return (
    <div className="flex justify-center items-center px-20 py-10  sm:px-5  sm:py-7 sm:flex-wrap">
      <div className=" lg:w-1/2 sm:w-full sm:px-2 sm:mr-0 ">
      <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}className="mb-10 flex justify-center items-center flex-col">
          <h1 className="text-4xl sm:text-2xl font-extrabold   ">  <span className="primaryUser font-normal">| </span> About</h1>
          {/* <div className="border-b-2 border-orange-600 w-24 sm:w-20 pt-1 " /> */}
        </motion.div>
        <motion.p
         variants={fadeIn('right', 'tween', 0.2, 1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }} class="mt-2 text-lg sm:text-md  text-gray-600">
          E-learning is the use of electronic educational technology in learning
          and teaching. Conceptually, e-learning is broadly synonymous with
          instructional technology, information and communication technology.
        </motion.p>
      </div>
      < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} 
      className="ml-20 sm:ml-0 sm:mt-7">
        <img
          src="about.png"
          className="w-[32rem] h-[32rem] sm:w-full sm:h-[22rem]"
        />
      </motion.div>
    </div>
  );
}

export default About;
