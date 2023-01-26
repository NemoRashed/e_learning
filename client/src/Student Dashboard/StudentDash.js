import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Course from "./Components/Course/Course";
import DetailCourse from "./Components/Course/DetailCourse";

function StudentDash() {
  return (
    <div className="flex   w-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Course />} />
        <Route path="/DetailCourse" element={<DetailCourse />} />
      </Routes>
    </div>
  );
}

export default StudentDash;
