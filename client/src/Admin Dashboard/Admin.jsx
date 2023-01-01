import React from 'react'

import { NavBar, Hero,  Footer
, CreateCourse, AllStudents,DetailedStudent, EditCourse, Courses} from './Components';
import { Routes, Route } from "react-router-dom";
const Admin = () => { 
  return (
    <div className='min-h-screen'>

<NavBar className=""/> 
      <Routes>
        <Route path="/" element={<Hero />} />
       
       
   
        <Route path="CreateCourse" element={<CreateCourse/>} />
        <Route path="AllStudents" element={<AllStudents/>} />
        <Route path="DetailedStudent" element={<DetailedStudent/>} />
        <Route path="EditCourse" element={<EditCourse/>} />
        <Route path="Courses" element={<Courses/>} />

{/* EditCourse */}
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default Admin