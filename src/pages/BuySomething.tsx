import Burhan from "../components/svgs/Characters/Burhan";
import Dialog from "../components/svgs/BuySomething/Dialog";
import SuperMarketWithTiles from "../components/svgs/BuySomething/SuperMarketWithTiles";
import Cloud from "../components/svgs/Root/Cloud";

function BuySomething() {
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
            Hi <span className="text-white">Galaxia</span>, I’m Burhan! Let’s go to the grocery store
            to buy something today
          </h4>
          <button className="min-w-fit text-white bg-[#478BF0] p-2 rounded-xl self-center text-xl mr-[10vw] ">
            Let's Go
          </button>
        </div>
      </div>
      {/* Character and Character name */}
      <div className="absolute w-1/5  left-[10%] top-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center">
          <Burhan />
          <h2 className="text-white text-6xl">Burhan</h2>
        </div>
      </div>
      <div className="absolute w-3/4 left-[20%] top-1/2 -translate-y-1/2">
        <SuperMarketWithTiles />
      </div>
    </div>
  );
}

export default BuySomething;
