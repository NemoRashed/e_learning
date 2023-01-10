import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-20 py-10 sm:px-5 sm:py-5 mx-auto">
          <div className="mb-20 flex justify-center items-center flex-col ">
            <h1 className="text-4xl  sm:text-2xl md:text-3xl font-extrabold  text-black   ">
              Latest update
            </h1>
            <div className="border-b-2 border-orange-600 w-60 sm:w-44 pt-1 " />
          </div>
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex  justify-between sm:flex-wrap md:flex-nowrap">
              <div class="w-80 sm:w-full h-44 mb-6  md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                <img src="blog1.png" className="w-32 h-32" />
                <div className="flex flex-col ml-5 text-white">
                  <span class="font-semibold title-font text-xl">CATEGORY</span>

                  <span class="mt-1 text-gray-700 text-sm">12 Jun 2019</span>
                </div>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole.
                  <br /> Marfa 3 wolf moon party messenger bag selfies, poke
                  vaporware kombucha lumbersexual pork belly polaroid
                  <br /> hoodie portland craft beer.
                </p>
                <Link
                  to="Blogdetail"
                  class="text-yellow-500 inline-flex items-center mt-4"
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
            <div class="py-8 flex justify-between sm:flex-wrap md:flex-nowrap">
              <div class="w-80  sm:w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                <img src="blog2.png" className="w-32 h-32" />
                <div className="flex flex-col ml-5 text-white">
                  <span class="font-semibold title-font text-xl">CATEGORY</span>

                  <span class="mt-1 text-gray-700 text-sm">12 Jun 2019</span>
                </div>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole.
                  <br /> Marfa 3 wolf moon party messenger bag selfies, poke
                  vaporware kombucha lumbersexual pork belly polaroid
                  <br /> hoodie portland craft beer.
                </p>
                <a class="text-yellow-500 inline-flex items-center mt-4">
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
                </a>
              </div>
            </div>
            <div class="py-8 flex justify-between sm:flex-wrap md:flex-nowrap">
              <div class="w-80 sm:w-full h-44 mb-6 md:mr-5 flex-shrink-0 flex flex-row justify-center items-center bg-gray-200 rounded-lg">
                <img src="blog3.png" className="w-32 h-32" />
                <div className="flex flex-col ml-5 text-white">
                  <span class="font-semibold title-font text-xl">CATEGORY</span>

                  <span class="mt-1 text-gray-700 text-sm">12 Jun 2019</span>
                </div>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole.
                  <br /> Marfa 3 wolf moon party messenger bag selfies, poke
                  vaporware kombucha lumbersexual pork belly polaroid
                  <br /> hoodie portland craft beer.
                </p>
                <a class="text-yellow-500 inline-flex items-center mt-4">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
