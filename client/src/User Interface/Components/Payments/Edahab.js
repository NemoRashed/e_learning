import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";


function Edahab() {
  return (
    <div className='px-40 py-20  md:px-5 md:py-10 flex justify-center items-center'>
        <div className='w-[50%] h-full md:w-full py-7 border flex flex-col justify-center  items-center'>
        <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-10 flex justify-center items-center flex-col"
          >
            <h1 className="text-2xl md:text-xl  font-extrabold  text-black flex items-center  flex-col ">
              <span className="primaryUser font-normal"><img src="/edahab.png" className="w-28 h-24 "/> </span> E-Dahab Payment
            </h1>
           
          </motion.div>
          < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}
       className="w-full px-10 md:px-5">


<form >
              <div className="mb-4 ">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  FullName
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
                  Number
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="number"
                  type="phone"
                 
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                 Price
                </label>
                <input
                  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                  id="price"
                  type="number"
                
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                 Price
                </label>
                <select  className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                placeholder="select type of money">
               <option>
                Doller
               </option>
               <option>
                shillig
               </option></select>
              </div>
              <div className="flex justify-center  items-center  ">
                <button className="hero-gradient text-white w-full font-semibold text-xl rounded-md py-2 px-4 hover:bg-indigo-600">
                 Submit
                </button>
                
              
              </div>
            </form>
            </motion.div>
        </div>
    </div>
  )
}

export default Edahab;