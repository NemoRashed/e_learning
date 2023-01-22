import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="px-20 py-10 md:px-10 md:py-5 rounded-lg">
      <div className="px-7 py-10  md:px-5 md:py-5 md:flex-wrap  shadow-lg flex flex-row items-center justify-around">
      <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
          <img src="/login.png" className="w-full h-96 md:w-60 md:h-52 md:mb-10" />
          </motion.div>
        <div className="w-80">
         
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-10 flex justify-center items-center flex-col"
          >
            <h1 className="text-2xl sm:text-2xl  font-extrabold  text-black  ">
              <span className="primaryUser font-normal">| </span> Registration Account
            </h1>
           
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                 Full Name
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="fullname"
                  type="fullname"
                 
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="email"
                  type="email"
                 
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Phone
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="phone"
                  type="phone"
                  
                  
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="password"
                  type="password"
                 
                />
              </div>
              <div className="flex justify-center  items-center  flex-col">
                <button className="hero-gradient text-white rounded-md py-2 px-4 hover:bg-violet-700 w-full">
                Register
                </button>
                <p className="mx-5">or</p>
                <button className="shadow w-full  rounded-md py-2 px-4 hover:bg-gray-200 flex items-center justify-center">
               <img src="/google.png" className="w-7 h-7 mr-3"/>
                Google Account
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Register;
