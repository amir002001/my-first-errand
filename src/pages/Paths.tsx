import { Link } from "react-router-dom";
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
      <button
        className="opacity-30 absolute w-1/4 z-10 left-[5%] bottom-[10%]"
        disabled
      >
        <FindWayCloud />
      </button>
      <button
        disabled
        className="opacity-30 absolute w-1/4  left-[25%] top-[40%] -translate-y-1/2"
      >
        <StrangerDangerCloud />
      </button>
      <Link
        to={"/buySomething"}
        className="absolute w-4/12  right-[15%] top-[40%] -translate-y-1/2"
      >
        <BuySomethingCloud />
      </Link>
      <button
        disabled
        className="opacity-30 absolute w-1/4 z-10 bottom-[10%] right-[5%]"
      >
        <FindParentsCloud />
      </button>
    </div>
  );
}

export default Paths;
