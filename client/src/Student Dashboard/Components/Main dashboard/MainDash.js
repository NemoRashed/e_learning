import Graphs from "./Graphs";
import Mylearning from "./Mylearning";
import Welcome from "./Welcome";

function MainDash() {
  return (
    <div className="flex flex-col px-20 py-10 justify-around">
      <Welcome />
      <Graphs />
      <Mylearning />
    </div>
  );
}

export default MainDash;
