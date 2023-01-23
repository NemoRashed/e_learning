import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

function StudentDash() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default StudentDash;
