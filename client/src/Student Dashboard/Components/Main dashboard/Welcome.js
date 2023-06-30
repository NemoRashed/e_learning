import React from "react";

function Welcome() {
  return (
    <div className="md:px-5">
      <div className="w-full h-32 md:h-40 bg-green-50 rounded-md flex flex-col  px-16 py-4 md:px-7  ">
        <div className="flex items-center mb-3">
          {" "}
          <h2 className="text-2xl md:text-lg font-bold mr-5 ">
            Hello, Nemo . . .{" "}
          </h2>
          <img src="/hi.png" className="w-10 h-10 md:w-7 md:h-7" />
        </div>
        <div className="text-sm text-center text-gray-700">
          <p>
            Welcome to your study dashboard, here you will have access to all
            the tools and resources you need to succeed in your studies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
