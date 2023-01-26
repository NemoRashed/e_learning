import React from "react";
import User from "../Main dashboard/User";
import { ReactReader } from "react-reader";

function DetailBook() {
  return (
    <div className="flex flex-col pl-72 pr-20   ">
      <User name={"E-Book"} />
      <ReactReader url={"/book.pdf"} title={"Book Title"} />
    </div>
  );
}

export default DetailBook;
