import { useState } from "react";
import { Link } from "react-router-dom";
import { Navlink } from "../../constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <div className=" w-full h-5 hero-gradient flex justify-between font-bold sm:font-semibold text-white px-52 text-sm sm:px-5 md:px-3 sm:py-4 sm:justify-center items-center ">
        <p className="md:mr-14">LearnCo9@gmail.com</p>
        <p>063 ********0</p>
      </div>
      <div className="flex   border justify-between item-center w-full lg:shadow-gray-300  px-20 py-1  md:pr-0 md:pt-0 md:pl-3  md:px-0 md:py-0  font-poppins shadow-lg ">
        <div className="flex flex-col items-center leading-3 md:flex-row ">
          <img src="/logov.png" className="w-10 h-10 sm:h-8 sm:w-8 md:mr-2  " />
          <p className="font-semibold text-sm ">
            Learn<span className="font-bold primaryUser ">Co.</span>
          </p>
        </div>
        {/* desktop */}
        <div className=" flex justify-between items-center   sm:hidden md:hidden ">
          <div className="mr-[20rem]">
            <ul
              className={
                " flex justify-between items-center text-md font-normal text-gray-700 "
              }
            >
              {Navlink.map((nav, index) => (
                <li
                  key={index}
                  className={`mr-2  px-2 py-1 rounded-[7px]  ${
                    activePage === nav.title
                      ? "border-b-2 border-violet-400"
                      : " "
                  }`}
                  onClick={() => setActivePage(nav.title)}
                >
                  {<Link to={`${nav.id} `}> {nav.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center ">
            <div className="flex justify-between items-center ">
              <Link to="/Login">
                {" "}
                <button className=" flex justify-center items-center hero-gradient text-white font-semibold px-5 py-2 rounded-[10px]">
                  <img src="user.png" className="w-5 h-5 mr-2" />
                  login
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div
          className=" sm:block md:block lg:hidden w-full  flex justify-end  z-30 h-10    "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <div className="flex justify-end">
              <img src="/close.png" className="w-10 h-10 mr-4 mb-5 " />
            </div>
          ) : (
            <div className="flex justify-end mt-2 mr-5">
              <img src="/menu.png" className="w-6 h-6 " />
            </div>
          )}
        </div>{" "}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-gray-100   top-0  h-screen w-full  hidden sm:block md:block">
          <div
            className="flex justify-end  border-b-2 
               border-gray-300 items-center px-2 py-0 mt-14 md:px-7 md:py-3"
          />

          <div>
            <ul className="flex justify-center px-10 items-center w-full flex-col ">
              {Navlink.map((nav, index) => (
                <li
                  key={index}
                  className={`w-full  mt-7  flex items-center text-md font-semibold  
                  }`}
                  onClick={() => {
                    setActivePage(nav.title), setIsOpen((prev) => !prev);
                  }}
                >
                  <div>
                    <img src={nav.img} className="w-5 h-5 mr-2 " />
                  </div>
                  {<Link to={`${nav.id} `}> {nav.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center flex-col ">
            <div className=" flex justify-between items-center  ">
              <Link
                to="/Login"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {" "}
                <button className="flex justify-center  items-center hero-gradient mr-5 text-white font-semibold px-10 py-2 rounded-[10px]  mt-14">
                  <img src="/user.png" className="w-3 h-3 mr-2" />
                  login
                </button>
              </Link>
              <Link
                to="/Login/Register"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {" "}
                <button className=" flex justify-center items-center hero-gradient text-white font-semibold px-10 py-2 rounded-[10px]  mt-14">
                  <img src="/user.png" className="w-3 h-3 mr-2" />
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
