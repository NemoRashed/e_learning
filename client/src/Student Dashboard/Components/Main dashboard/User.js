import React from "react";

function User(props) {
  return (
    <div className="px-5  py-2 font-mono flex flex-row justify-between">
      <div className="font-semibold text-2xl flex items-center">
        <img src="/dashboard.png" className="w-7 h-7 mr-2" />
        <span className="text-green-700 font-semibold ml-1">{props.name}</span>
      </div>
      <div className="flex  justify-around">
        <div className="bg-green-400 rounded-full w-12 h-12 flex justify-center items-center">
          <img src="/user.png" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default User;
