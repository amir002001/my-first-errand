import BuySomethingCloud from "../components/svgs/Paths/BuySomethingCloud";
import FindParentsCloud from "../components/svgs/Paths/FindParentsCloud";
import FindWayCloud from "../components/svgs/Paths/FindWayCloud";
import StrangerDangerCloud from "../components/svgs/Paths/StrangerDangerCloud";
import Cloud from "../components/svgs/Root/Cloud";

function FindWay() {
  return (
    <div className="w-screen h-screen">
      {/* clouds */}
      <div className="absolute w-1/3 opacity-[38%] top-0 -z-20 -translate-x-1/3 -translate-y-1/3">
        <Cloud />
      </div>
      <div className="absolute w-1/3 opacity-[38%] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-20 ">
        <Cloud />
      </div>
      <div className="absolute w-1/3 opacity-[38%] right-0 top-[5%] -z-20 translate-x-1/3">
        <Cloud />
      </div>
      
    </div>
  );
}

export default FindWay;
