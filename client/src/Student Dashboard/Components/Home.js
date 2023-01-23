import React from "react";
import MainDash from "./Main dashboard/MainDash";
import Information from "./Information/Information";

function Home() {
  return (
    <div className="flex flex-row ">
      <MainDash />
      <Information />
    </div>
  );
}

export default Home;
