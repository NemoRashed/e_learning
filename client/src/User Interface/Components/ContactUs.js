import React from "react";
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';


function ContactUs() {
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class=" w-full px-20 py-24 sm:px-5  mx-auto flex sm:flex-wrap flex-wrap justify-between">
           < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}  class="lg:w-1/2 sm:w-full bg-gray-800 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative">
            <img className="absolute inset-0 w-full h-screen" src="map.jpg" />

            <div class="hero-gradient bg-opacity-10  w-full relative flex justify-between items-center sm:flex-wrap py-6 rounded shadow-md">
              <div class="w-full sm:px-3 px-6  ">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs flex items-center">
                  <img src="location.png" className="w-5 h-5 mr-2" />
                  ADDRESS
                </h2>
                <p class="mt-1">Hargeisa, Somaliland</p>
              </div>
              <div class="w-full px-6 mt-4 ">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs flex items-center">
                  <img src="email.png" className="w-5 h-5 mr-2" />
                  EMAIL
                </h2>
                <a class="leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 flex items-center">
                  <img src="phone.png" className="w-5 h-5 mr-2" />
                  PHONE
                </h2>
                <p class="leading-relaxed">063 *** *** *</p>
              </div>
            </div>
          </motion.div>
          <div class="lg:w-1/3 sm:w-full  bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}className="mb-10 flex justify-center items-center flex-col">
              <h1 className="text-4xl sm:text-2xl font-extrabold  text-black  ">
              <span className="text-orange-500 font-normal">| </span>    Contact Us
              </h1>
              {/* <div className="border-b-2 border-orange-600 w-52 sm:w-32 pt-1 " /> */}
            </motion.div>
            < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} >
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-lg text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full seconderUser rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-lg text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full seconderUser  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-lg text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full seconderUser rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-black font-bold hero-gradient border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            </motion.div>
          </div>
          
        </div>
        
      </section>
    </div>
  );
}

export default ContactUs;
