import Mockup from "../img/mockUp.png";
function hero() {
  return (
    <>
      <div className="text-center md:max-w-[1200px] p-8 md:p-20  grid grid-cols-1 md:grid-cols-2 md:text-start gap-10">
        <div className="mt-10 ">
          <h1 className="leading-normal text-[2rem] whitespace-nowrap md:whitespace-wrap md:text-[3rem] font-bold text-white">
            Unlock Your
            <br />{" "}
            <span className="bg-gradient-to-r from-[#ff0000]  to-[#f81b3c] inline-block text-transparent bg-clip-text ">
              Favorite Skins
            </span>
          </h1>
          <p className="text-[0.9rem]  md:text-[.9rem] text-[#979696]">
            Upgrade your MLBB gaming with Ryumoto GFX! Enjoy free, cool skins
            for an enhanced gameplay experience.
          </p>

          <div className=" p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
            <div className=" transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-white bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#ff0000]  to-[#7e0316] p-3 md:py-2 md:px-5 rounded-full active:text-[#212121]">
              Download Now
            </div>
            <div className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#ff0000] to-[#7e0316] rounded-full md:text-sm">
              <span class="transition-all flex w-full h-full bg-[#111010] text-white rounded-full p-[2px] justify-center items-center  active:shadow-pinkShadow">
                <p className="m-[7px] ">Get in Playstore</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <img
            className=" object-cover"
            width={200}
            src={Mockup}
            alt="mock-up"
          />
        </div>
      </div>
    </>
  );
}

export default hero;
