import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* mobile */}
      <div className="lg:hidden md:block px-5 py-2  shadow mb-2 w-full z-30">
        <div className="flex justify-between">
          <div className="flex flex-col items-center leading-3 md:flex-row ">
            <img
              src="/logos.png"
              className="w-10 h-10 md:h-6 md:w-8 md:mr-2  "
            />
            <p className="font-semibold text-sm ">
              Learn<span className="font-bold text-green-400 ">Co.</span>
            </p>
          </div>{" "}
          <div onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <img src="/close.png" className="w-7 h-7  " />
            ) : (
              <img src="/menu.png" className="w-6 h-6 " />
            )}
          </div>
        </div>
      </div>{" "}
      {isOpen && (
        <div className="absolute z-10 w-full h-screen bg-white top-0 ">
          <div className="  w-full h-screen border  ">
            {/* list menu */}
            <div className="px-5 py-5 mt-16">
              <ul className="flex flex-col justify-center text-gray-600 text-md">
                <Link to="/">
                  {" "}
                  <li
                    className={`flex items-center mb-2 radius  px-3 py-2 ${
                      activePage === "Dashboard" ? "bg-green-100" : " "
                    }`}
                    onClick={() => {
                      setActivePage("Dashboard"), setIsOpen((prev) => !prev);
                    }}
                  >
                    <img src="/home1.png" className="w-5 h-5 mr-2" />
                    Dashboard
                  </li>
                </Link>
                <Link to="/Courses">
                  {" "}
                  <li
                    className={`flex items-center mb-2 radius  px-3 py-2 ${
                      activePage === "Courses" ? "bg-green-100" : " "
                    }`}
                    onClick={() => {
                      setActivePage("Courses"), setIsOpen((prev) => !prev);
                    }}
                  >
                    <img src="/open-book.png" className="w-5 h-5 mr-2" />
                    Courses
                  </li>
                </Link>
                <Link to="/Ebook">
                  {" "}
                  <li
                    className={`flex items-center mb-2 radius  px-3 py-2 ${
                      activePage === "Ebook" ? "bg-green-100" : " "
                    }`}
                    onClick={() => {
                      setActivePage("Ebook"), setIsOpen((prev) => !prev);
                    }}
                  >
                    <img src="/book3.png" className="w-5 h-5 mr-2" />
                    E-book
                  </li>
                </Link>
                <Link to="/Blog">
                  {" "}
                  <li
                    className={`flex items-center mb-2 radius  px-3 py-2 ${
                      activePage === "Blog" ? "bg-green-100" : " "
                    }`}
                    onClick={() => {
                      setActivePage("Blog"), setIsOpen((prev) => !prev);
                    }}
                  >
                    <img src="/course.png" className="w-5 h-5 mr-2" />
                    Blog
                  </li>
                </Link>
                <Link to="/Contact">
                  {" "}
                  <li
                    className={`flex items-center mb-16 radius  px-3 py-2 ${
                      activePage === "Contact" ? "bg-green-100" : " "
                    }`}
                    onClick={() => {
                      setActivePage("Contact"), setIsOpen((prev) => !prev);
                    }}
                  >
                    <img src="/phone.png" className="w-5 h-5 mr-2  " />
                    Contact
                  </li>
                </Link>
                <li className="bg-green-100 w-28 h-8 rounded-lg text-md  mb-2 flex justify-center items-center">
                  <img src="/log-out.png" className="w-4 h-4 mr-2" /> Logout
                </li>
              </ul>
            </div>
            {/* download */}
            <div className="border h-48 flex flex-col  justify-center items-center  py-2 ">
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
        </div>
      )}
      {/* desktop */}
      <div className=" md:hidden block w-1/5 md:w-0  h-screen border fixed ">
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
              <li
                className={`flex items-center mb-2 radius  px-3 py-2 ${
                  activePage === "Dashboard" ? "bg-green-100" : " "
                }`}
                onClick={() => setActivePage("Dashboard")}
              >
                <img src="/home1.png" className="w-5 h-5 mr-2" />
                Dashboard
              </li>
            </Link>
            <Link to="/Courses">
              {" "}
              <li
                className={`flex items-center mb-2 radius  px-3 py-2 ${
                  activePage === "Courses" ? "bg-green-100" : " "
                }`}
                onClick={() => setActivePage("Courses")}
              >
                <img src="/open-book.png" className="w-5 h-5 mr-2" />
                Courses
              </li>
            </Link>
            <Link to="/Ebook">
              {" "}
              <li
                className={`flex items-center mb-2 radius  px-3 py-2 ${
                  activePage === "Ebook" ? "bg-green-100" : " "
                }`}
                onClick={() => setActivePage("Ebook")}
              >
                <img src="/book3.png" className="w-5 h-5 mr-2" />
                E-book
              </li>
            </Link>
            <Link to="/Blog">
              {" "}
              <li
                className={`flex items-center mb-2 radius  px-3 py-2 ${
                  activePage === "Blog" ? "bg-green-100" : " "
                }`}
                onClick={() => setActivePage("Blog")}
              >
                <img src="/course.png" className="w-5 h-5 mr-2" />
                Blog
              </li>
            </Link>
            <Link to="/Contact">
              {" "}
              <li
                className={`flex items-center mb-16 radius  px-3 py-2 ${
                  activePage === "Contact" ? "bg-green-100" : " "
                }`}
                onClick={() => setActivePage("Contact")}
              >
                <img src="/phone.png" className="w-5 h-5 mr-2  " />
                Contact
              </li>
            </Link>
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
    </>
  );
}

export default Sidebar;
