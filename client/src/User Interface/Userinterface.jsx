import React from "react";

import {
  NavBar,
  Home,
  Courses,
  ContactUs,
  Footer,
  About,
  Whychoose,
  Blog, 
  Blogdetail,
  Coursedetail,
  Topcourses,
  Login,
  Register,
  Testimonail,
} from "./Components";
import Enroll from "./Components/Payments/Enroll"
import Zaad from "./Components/Payments/Zaad"
import Mastercard from "./Components/Payments/Mastercard"
import Edahab from "./Components/Payments/Edahab"
import { Routes, Route } from "react-router-dom";


const Userinterface = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topcourses" element={<Topcourses />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/Blogdetail" element={<Blogdetail />} />
        <Route path="/Courses/Coursedetail" element={<Coursedetail />} />
        <Route path="/Whychoose" element={<Whychoose />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login/Register" element={<Register />} />
        <Route path="/Testimonail" element={<Testimonail />} />
        <Route path="/Enroll" element={<Enroll />} />
        <Route path="/Enroll/Zaad" element={<Zaad />} />
        <Route path="/Enroll/Edahab" element={<Edahab />} />
        <Route path="/Enroll/Mastercard" element={<Mastercard />} />





      </Routes>

      <Footer />
    </div>
  );
};

export default Userinterface;
