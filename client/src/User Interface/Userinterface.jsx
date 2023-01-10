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
} from "./Components";
import { Routes, Route } from "react-router-dom";
const Userinterface = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blogdetail" element={<Blogdetail />} />
        <Route path="/Coursedetail" element={<Coursedetail />} />
        <Route path="/Whychoose" element={<Whychoose />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Userinterface;
