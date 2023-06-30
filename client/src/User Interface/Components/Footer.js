import React from "react";

import { motion } from 'framer-motion';
import { fadeIn} from '../../utils/motion';
function Footer() {
  return (
    <div>
      < motion.footer
       variants={fadeIn('up', 'tween', 0.2, 1)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }} class="text-black bg-gray-100 body-font">
        <div class="container px-20 sm:px-7 py-24 sm:py-10 mx-auto flex justify-center items-center flex-row  flex-wrap sm:flex-col  ">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mr-16 mr-24 sm:ml-5">
            <a class="flex title-font font-medium items-center md:justify-start justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 hero-gradient rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-3xl primaryUser">E-Learning</span>
            </a>
            <p class="mt-2 text-sm text-gray-600">
              E-learning is the use of electronic educational technology in
              learning and teaching. Conceptually, e-learning is broadly
              synonymous with instructional technology, information and
              communication technology.
            </p>
          </div>
          <div class="flex-grow flex  sm:justify-between flex-wrap -mb-10 md:mt-5 mt-10 sm:mr-14 ">
            <div class="lg:w-1/4 w-full px-2 mr-10 sm:mr-5 md:mr-14">
              <h2 class="title-font font-bold primaryUser text-lg mb-3">
                Category
              </h2>
              <nav class="list-none mb-10  cursor-pointer  ">
                <li>
                  <a class="text-gray-600 hover:text-violet-400">About</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Contact</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Blog</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Courses</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full ">
              <h2 class="title-font font-bold primaryUser tracking-widest  mb-3 text-lg">
               SocailMedia
              </h2>
              <nav class="list-none mb-10 cursor-pointer">
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Facebook</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Whatsapp</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Instagram</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-violet-400">Linkedin</a>
                </li>
              </nav>
            </div>
          </div>
          <div className="  w-96 sm:w-full h-40 sm:h-full sm:mt-10  md:mt-10 flex justify-center sm:mr-10">
            <video controls>
              <source
                src="https://www.youtube.com/watch?v=b9eMGE7QtTk"
                type="video/ogg"
              />
            </video>
          </div>
        </div>
        <div class="bg-gray-300 ">
          <div class="container mx-auto py-4 px-28 sm:px-10 flex justify-between items-center sm:flex-wrap sm:flex-col ">
            <p class="text-gray-900 text-sm text-center sm:text-left">
              © 2023 — E-learning
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-900 ml-1 "
                target="_blank"
              >
                @SiraadTech
              </a>
            </p>
            <span class="inline-flex  sm:mt-3 mt-2 justify-center sm:justify-start">
              <a class="text-gray-900">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-900">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-900">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-900">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
