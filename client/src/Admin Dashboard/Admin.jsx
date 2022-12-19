import React from 'react'

import { NavBar, Hero, NewCourses, Students, Button, Footer} from './Components';
import { Routes, Route } from "react-router-dom";
const Admin = () => {
  return (
    <div>

<NavBar/> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="NewCourses" element={<NewCourses/>} />
        <Route path="Students" element={<Students/>} />
        
        {/* <Route path="NewCourses" element={<NewCourses/>} />*/}
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Admin