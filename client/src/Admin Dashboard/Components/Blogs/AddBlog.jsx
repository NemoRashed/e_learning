import React from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom';

const AddBlog = () => {
  return (
    <div>

<div className="px-4 md:px-10 py-4 md:py-7  rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <Link to="/">
            <button className="ne-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-primary hover:bg-primary-600 focus:outline-none rounded mr-70">
              <p className="text-sm font-medium leading-none text-white">
                <i class="bx bx-arrow-back w-9 pr-2">Back</i>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div class="items-center px- py-12 lg:px-20">
        <div class="flex flex-col w-full  md:col-span-2 p-10 mx-auto  transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div>
            <h3 class="text-3xl text-center text-primary mb-4  bg-orange-200 p-2 rounded-xl 
            font-poppins ">Create New Blog</h3>

            <div className="mt-6">
              <form action="#" class="space-y-6">
                <div className="col-span-6">
                  <label
                    htmlFor="numberka_dacwoodaha"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="numberka_dacwoodaha"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Blog
                  </label>
                  <input
                    type="textarea"
                    name=""
                    id=""
                    className="mt-1 block w-full py-12 px-3 border border-gray-300
                     bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                      focus:border-indigo-500 sm:text-sm"
                 
                  />
                </div>
               
           
                <div className="px-4 py-3 bg-orange-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm 
                    text-sm font-medium rounded-md text-white bg-primary hover:bg-primary 
                    focus:outline-none focus:ring-2 focus:ring-offset-2"
                    
                  >
                    Save Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AddBlog