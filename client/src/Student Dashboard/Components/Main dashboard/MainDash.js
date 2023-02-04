import Mylearning from "./Mylearning";
import Welcome from "./Welcome";
import User from "./User";

function MainDash() {
  return (
    <div className="flex flex-col pl-72 pr-20  md:pl-0 md:pr-0  justify-around">
      <User name={"Dashboard"} />
      <Welcome />
      <Mylearning />
    </div>
  );
}

export default MainDash;
