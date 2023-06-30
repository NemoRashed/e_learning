import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

function Mastercard() {
  return (
    <div className="px-40 py-20  md:px-5 md:py-10 flex justify-center items-center">
      <div className="w-[50%] h-full md:w-full py-7 border flex flex-col justify-center  items-center">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-10 flex justify-center items-center flex-col"
        >
          <h1 className="text-2xl md:text-xl  font-extrabold  text-black flex items-center  flex-col ">
            <span className="primaryUser font-normal">
              <img src="/mastercard.png" className="w-28 h-24 " />{" "}
            </span>{" "}
          Mastercard Payment
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full px-10 md:px-5"
        >
          <form className="flex flex-col">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="card-number"
              >
                Card Number:
              </label>
              <input
                className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                type="text"
                id="card-number"
                name="card-number"
                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                required
              />
            </div>


            <div className="mb-4 ">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="expiration-date">Expiration Date:
              </label>
              <input
              className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              type="month"
              id="expiration-date"
              name="expiration-date"
              required
            />
            </div>

           
            <div className="mb-4 ">
              <label
                className="block text-gray-700 font-medium mb-2"
                for="cvv">CVV:
              </label>
              <input
              className="bg-white border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              type="text"
              id="cvv"
              name="cvv"
              pattern="[0-9]{3,4}"
              required
            />
            </div>
            

           
           

            <button className="hero-gradient text-white w-full font-semibold text-xl rounded-md py-2 px-4 hover:bg-indigo-600">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Mastercard;
