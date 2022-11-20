import Burhan from "../components/svgs/Characters/Burhan";
import Dialog from "../components/svgs/FindWay/Dialog";
import SuperMarketWithTiles from "../components/svgs/FindWay/SuperMarketWithTiles";
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
      {/* Dialog box and text */}
      <div className="absolute w-[80%] left-1/2 bottom-[20%] -translate-x-1/2 ">
        <div className="relative w-full h-full flex items-center">
          <div className="absolute w-full -z-10">
            <Dialog />
          </div>
          <div className="w-[10%]"></div>
          <h4 className="text-3xl text-[#FFE9B1] grow">
            Hi <span>Galaxia</span>, I’m Burhan! Let’s go to the grocery store
            to buy something today
          </h4>
          <button className="min-w-fit text-white bg-[#478BF0] p-2 rounded-xl self-center text-xl mr-[10vw] ">
            Let's Go
          </button>
        </div>
      </div>
      {/* Character and Character name */}
      <div className="hidden">
        <div>
          <Burhan />
        </div>
        <h2>Burhan</h2>
      </div>
      <SuperMarketWithTiles />
    </div>
  );
}

export default FindWay;
