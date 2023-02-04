import React from "react";
import Course from "./Course/Course";
import MainDash from "./Main dashboard/MainDash";

function Home() {
  return (
    <div className="flex flex-row md:flex-col ">
      <MainDash />
    </div>
  );
}

export default Home;
