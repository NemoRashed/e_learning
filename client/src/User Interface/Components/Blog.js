import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';
import { cardBlog } from "../../constants";

function Blog() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-20 py-10 md:px-5 md:py-5 mx-auto">
        <motion.div
       variants={fadeIn('right', 'tween', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}className="mb-20 md:mb-12 flex justify-center items-center flex-col ">
            <h1 className="text-4xl  sm:text-2xl md:text-3xl font-extrabold  text-black   ">
            <span className="primaryUser font-normal">| </span>    Latest update
            </h1>
            {/* <div className="border-b-2 border-orange-600 w-60 sm:w-44 pt-1 " /> */}
          </motion.div>
          < motion.div
       variants={fadeIn('up', 'tween', 0.5, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.10 }} class="-my-8 divide-y-2 divide-gray-100">
        {cardBlog.map((blog)=>(
          <div class="py-8 flex  justify-between md:flex-wrap ">
              <div class="w-80 md:w-full h-44 mb-6  md:mr-5 flex-shrink-0 flex flex-row justify-center items-center hero-gradient rounded-lg">
                <img src={blog.img} className="w-32 h-32" />
                <div className="flex flex-col ml-5 text-white">
                  <span class="font-semibold title-font text-xl">{blog.category}</span>

                  <span class="mt-1 text-gray-700 text-sm">{blog.date}</span>
                </div>
              </div>
              <div class="md:flex-grow ml-10 md:ml-0">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {blog.title}
                </h2>
                <p class="leading-relaxed">
                {blog.description}
                </p>
                <Link
                  to="/Blog/Blogdetail"
                  class="primaryUser inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
        ))}
            
          
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
