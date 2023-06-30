import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-40 py-20 md:px-5 md:py-10 flex justify-center items-center">
      <div className="w-96 h-96 md:w-full md:h-full  md:py-10 border flex flex-col justify-center  items-center">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-10 flex justify-center items-center flex-col"
        >
          <h1 className="text-2xl md:text-xl  font-extrabold  text-black flex items-center  flex-col ">
            <span className="primaryUser font-normal">
              <img
                src="/payment2.png"
                className="w-16 h-16 bg-black rounded-full"
              />{" "}
            </span>{" "}
            Payment Method
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full px-10 md:px-5"
        >
          <Link to="/Enroll/zaad">
            {" "}
            <button className="shadow w-full mb-5 rounded-md py-2 px-4 hover:bg-gray-100 flex items-center justify-center">
              <img src="/Zaad.png" className="w-20 h-6 " />
              Zaad Payment
            </button>
          </Link>
          <Link to="/Enroll/Edahab">
            {" "}
            <button className="shadow w-full mb-5 rounded-md py-2 px-4 hover:bg-gray-100 flex items-center justify-center">
              <img src="edahab.png" className="w-17 h-6 mr-2" />
              E-dahab Payment
            </button>
          </Link>
          <Link to="/Enroll/Mastercard">
            {" "}
            <button className="shadow w-full  rounded-md py-2 px-4 hover:bg-gray-100 flex items-center justify-center">
              <img src="mastercard.png" className="w-10 h-7 mr-3" />
              Mastercard Payment
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
