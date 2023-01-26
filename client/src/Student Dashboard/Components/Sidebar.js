import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 h-screen border fixed ">
      {/* logo */}
      <div className="flex w-full flex-row justify-center items-center border   py-7 ">
        <img src="/logos.png" className="w-14 h-10 mr-3    " />
        <p className="font-semibold text-2xl  ">
          Learn<span className="font-bold text-green-500 ">Co.</span>
        </p>
      </div>
      {/* list menu */}
      <div className="px-5 py-5">
        <ul className="flex flex-col justify-center text-gray-600 text-md">
          <Link to="/">
            {" "}
            <li className="flex items-center mb-2 radius bg-green-100 px-3 py-2">
              <img src="/home1.png" className="w-5 h-5 mr-2" />
              Dashboard
            </li>
          </Link>
          <Link to="/Courses">
            {" "}
            <li className="flex items-center mb-2 radius hover:bg-green-100 px-3 py-2">
              <img src="/open-book.png" className="w-5 h-5 mr-2" />
              Courses
            </li>
          </Link>
          <li className="flex items-center mb-2 radius hover:bg-green-100 px-3 py-2">
            <img src="/book3.png" className="w-5 h-5 mr-2" />
            E-book
          </li>
          <li className="flex items-center mb-2 radius hover:bg-green-100 px-3 py-2">
            <img src="/course.png" className="w-5 h-5 mr-2" />
            Blog
          </li>
          <li className="flex items-center mb-14 radius hover:bg-green-100 px-3 py-2">
            <img src="/phone.png" className="w-5 h-5 mr-2  " />
            Contact
          </li>
          <li className="bg-green-100 w-28 h-8 rounded-lg text-md  mb-2 flex justify-center items-center">
            <img src="/log-out.png" className="w-4 h-4 mr-2" /> Logout
          </li>
        </ul>
      </div>
      {/* download */}
      <div className="border h-32 flex flex-col  justify-center items-center  py-2 ">
        <div className="font-semibold mb-3">Download Our App</div>
        <div className="bg-gray-100 w-52 flex h-20  rounded-lg items-center justify-center">
          <div className="rounded-full bg-white w-12 h-12  mr-5 flex justify-center items-center">
            <img src="/playstore.png" className="h-7 w-7" />
          </div>
          <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
            <img src="/apple.png" className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
