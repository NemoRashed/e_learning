import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Course from "./Components/Course/Course";
import DetailCourse from "./Components/Course/DetailCourse";
import Ebook from "./Components/E-book/Ebook";
import DetailBook from "./Components/E-book/DetailBook";
import Blog from "./Components/Blog/Blog";
import DetailBlog from "./Components/Blog/DetailBlog";
import Contact from "./Components/Contact us/Contact";

function StudentDash() {
  return (
    <div className="flex   w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Course />} />
        <Route path="/DetailCourse" element={<DetailCourse />} />
        <Route path="/Ebook" element={<Ebook />} />
        <Route path="/DetailBook" element={<DetailBook />} />
        <Route path="/Blog" element={<Blog />} />

        <Route path="/Blog/DetailBlog" element={<DetailBlog />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default StudentDash;
