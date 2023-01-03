import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [Active, setActive] = useState(false);
  const [Dark, setDark] = useState(false);

  function menu() {
    setIsOpen(!isOpen);
  }

  function darkScreen() {
    setDark(!Dark);
  }
  function active() {
    setActive((className = "border-b-4 border-orange-400"));
  }
  return (
    <>
      <div className="flex  justify-between item-center w-full lg:shadow-gray-300  px-20 py-5 sm:pr-0 sm:pt-0 sm:pl-5  md:px-0 md:py-0  font-poppins shadow-lg ">
        <div className="">
          <img src="logo.png" className="w-14 h-14 sm:h-12 sm:w-12   " />
        </div>
        {/* desktop */}
        <div className=" flex justify-between items-center   sm:hidden md:hidden ">
          <div className="mr-[20rem]">
            <ul className="flex justify-between items-center text-lg  ">
              <Link to="/">
                <li className="mr-2 border-b-4 border-orange-400 px-4 py-1 rounded-[7px]">
                  Home
                </li>
              </Link>
              <Link to="Courses">
                <li className="mr-200 px-2 py-1 rounded-[7px]">Courses</li>
              </Link>
              <Link to="About">
                {" "}
                <li className="mr-2  px-2 py-1 rounded-[7px]">About</li>
              </Link>
              <Link to="Blog">
                <li className="mr-2 px-2 py-1 rounded-[7px]">Blog</li>
              </Link>
              <Link to="ContactUs">
                <li className="mr-2 px-2 py-1 rounded-[7px]">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center ">
            <div onClick={darkScreen}>
              {Dark ? (
                <img src="sun.png" className="w-7 h-7 mr-5" />
              ) : (
                <img src="moon.png" className="w-7 h-7 mr-5" />
              )}
            </div>
            <div className="flex justify-between items-center ">
              <button className=" flex justify-center items-center somaliland-gradient text-white font-semibold px-5 py-2 rounded-[10px]">
                <img src="user.png" className="w-5 h-5 mr-2" />
                login
              </button>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div
          className=" sm:block md:block lg:hidden w-full mt-0 flex justify-end p-0  "
          onClick={menu}
        >
          {isOpen ? (
            <div className="relative  bg-gray-600 h-screen ml-20  ">
              <div
                className="flex justify-end  border-b-2 
               border-gray-300 items-center px-3 py-5  md:px-7 md:py-3"
              >
                {/* <div>
                  <img
                    src="logo.png"
                    className="w-14 h-14 sm:h-12 sm:w-12   "
                  />
                </div> */}
                <div className="flex justify-end">
                  <img src="close.png" className="w-10 h-10  " />
                </div>
              </div>
              <div>
                <ul className="flex justify-center px-14 items-center w-full flex-col ">
                  <li className=" w-full mb-6 mt-14 border-black flex px-3 items-center text-md font-semibold ">
                    <div>
                      <img src="home.png" className="w-5 h-5 mr-2 " />
                    </div>
                    Home
                  </li>
                  <li className="  w-full mb-6 border-black px-3 flex items-center text-md font-semibold">
                    <div>
                      <img src="blogging.png" className="w-5 h-5 mr-2 " />
                    </div>
                    Blog
                  </li>
                  <li className="   w-full mb-6 border-black px-3 flex items-center text-md font-semibold">
                    <div>
                      <img src="about1.png" className="w-5 h-5 mr-2 " />
                    </div>
                    About
                  </li>
                  <li className="   w-full mb-6 border-black px-3 flex items-center text-md font-semibold">
                    <div>
                      <img src="books.png" className="w-5 h-5 mr-2 " />
                    </div>
                    Courses
                  </li>
                  <li className="   w-full mb-6 border-black px-3 flex items-center text-md font-semibold">
                    <div>
                      <img src="phone.png" className="w-5 h-5 mr-2 " />
                    </div>
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center flex-col ">
                {/* <div>
                  <img src="sun.png" className="w-7 h-7 " />
                </div> */}
                <div className=" flex justify-between items-center  ">
                  <button className=" flex justify-center items-center somaliland-gradient mr-5 text-white font-semibold px-5 py-2 rounded-[10px]  mt-14">
                    <img src="user.png" className="w-5 h-5 mr-2" />
                    login
                  </button>
                  <button className=" flex justify-center items-center somaliland-gradient text-white font-semibold px-5 py-2 rounded-[10px]  mt-14">
                    <img src="user.png" className="w-5 h-5 mr-2" />
                    Register
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-end mt-3 mr-5">
              <img src="menu.png" className="w-7 h-7 " />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
