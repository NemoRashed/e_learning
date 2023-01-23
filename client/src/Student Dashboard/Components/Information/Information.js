import Calender from "./Calender";
import Blog from "./Blog";

function index() {
  return (
    <div className="flex flex-col  ">
      <Calender />
      <Blog />
    </div>
  );
}

export default index;
