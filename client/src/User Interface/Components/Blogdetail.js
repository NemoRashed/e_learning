import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function Blogdetail() {
  return (
    <>
      <div className="px-20 pt-10 md:px-5 md:pt-5 ">
        <Link to="/blog">
          {" "}
          <img src="/back.png" className="w-12 h-12  md:w-5 md:h-5" />
        </Link>
      </div>
      <div className="px-48 md:px-5 py-5 flex flex-row justify-center items-center ">
        <div>
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-10 flex justify-center items-center flex-col "
          >
            <h1 className="text-4xl   md:text-xl font-extrabold text-center text-black   ">
              <span className="primaryUser font-normal ">| </span> Bitters
              hashtag waistcoat fashion axe
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div class="w-full    h-52 md:h-44 mb-6   md:mr-5  flex-shrink-0 flex flex-row justify-center items-center hero-gradient rounded-lg">
              <img src="/blog1.png" className="w-44 h-44 md:w-24 md:h-24" />
              <div className="flex flex-col    text-white">
                <span class="font-semibold title-font text-xl">
                  Web developemnt
                </span>

                <span class="mt-1 text-sm">12 Jun 2019</span>
              </div>
            </div>
            <div className="text-xl  ">
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Blogdetail;
