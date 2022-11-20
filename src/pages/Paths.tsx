import BuySomethingCloud from "../components/svgs/Paths/BuySomethingCloud";
import FindParentsCloud from "../components/svgs/Paths/FindParentsCloud";
import FindWayCloud from "../components/svgs/Paths/FindWayCloud";
import StrangerDangerCloud from "../components/svgs/Paths/StrangerDangerCloud";
import Cloud from "../components/svgs/Root/Cloud";

function Paths() {
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
      {/* paths */}
      <div className="absolute w-1/4 left-[5%] bottom-[10%]">
        <FindWayCloud />
      </div>
      <div className="absolute w-1/4 -z-10 left-[25%] top-[40%] -translate-y-1/2">
        <StrangerDangerCloud />
      </div>
      <div className="absolute w-4/12 -z-10 right-[15%] top-[40%] -translate-y-1/2">
        <BuySomethingCloud />
      </div>
      <div className="absolute w-1/4 bottom-[10%] right-[5%]">
        <FindParentsCloud />
      </div>
    </div>
  );
}

export default Paths;
