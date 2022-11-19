import BuySomething from "../components/svgs/Paths/BuySomething";
import FindParents from "../components/svgs/Paths/FindParents";
import FindWay from "../components/svgs/Paths/FindWay";
import StrangerDanger from "../components/svgs/Paths/StrangerDanger";
import Cloud from "../components/svgs/Root/Cloud";

function Paths() {
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-1/3 left-[5%] bottom-[10%]">
        <FindWay />
      </div>
      <div className="absolute w-1/3">
        <StrangerDanger />
      </div>
      <div className="absolute w-1/3">
        <BuySomething />
      </div>
      <div className="absolute w-1/3">
        <FindParents />hello
      </div>
    </div>
  );
}

export default Paths;
