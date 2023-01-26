import React from "react";

function Welcome() {
  return (
    <div className="w-full h-32 bg-green-50 rounded-md flex flex-col  px-16 py-4">
      <div className="flex items-center mb-3">
        {" "}
        <h2 className="text-2xl font-bold mr-5 ">Hello, Nemo . . . </h2>
        <img src="/hi.png" className="w-10 h-10" />
      </div>
      <div className="text-sm text-center text-gray-700">
        <p>
          Welcome to your study dashboard, here you will have access to all the
          tools and resources you need to succeed in your studies.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
