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
} from "./Components";
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

      </Routes>

      <Footer />
    </div>
  );
};

export default Userinterface;
