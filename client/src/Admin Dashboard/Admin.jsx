import React from 'react'

import { NavBar, Hero,  Footer, AllCourses
, CreateCourse, AllStudents,DetailedStudent,
 EditCourse, Courses, Graphs, Bundle1, Blogs,AddBlog } from './Components';
 
import { Routes, Route,} from "react-router-dom";
const Admin = () => { 
  return (
    <div className='min-h-screen'>

<NavBar className=""/> 
      <Routes>
        <Route path="/" element={<Hero />} />
       <Route path = '/Graphs' element={<Graphs/>}/>
        
   
        <Route path="CreateCourse" element={<CreateCourse/>} />
        <Route path="AllStudents" element={<AllStudents/>} />
        <Route path="DetailedStudent" element={<DetailedStudent/>} />
        <Route path="EditCourse" element={<EditCourse/>} />
        <Route path="Courses" element={<Courses/>} />
        <Route path="AllCourses" element={<AllCourses/>} />
        <Route path="/Pricing/Bundle1" element={<Bundle1/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/AddBlog" element={<AddBlog/>} />
{/* EditCourse */}
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default Admin