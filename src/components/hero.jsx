import Mockup from "../img/mockUp.png";
import Buttons from "./Buttons";

function hero() {
  return (
    <>
      <div className="text-center md:max-w-[1200px] p-8 md:p-20  grid grid-cols-1 md:grid-cols-2 md:text-start gap-10">
        <div className="mt-10 ">
          <h1 className="leading-normal text-[2rem] whitespace-nowrap md:whitespace-wrap md:text-[3rem] font-bold text-white">
            Unlock Your
            <br />{" "}
            <span className="bg-gradient-to-r from-[#ff0000]  to-[#940c21] inline-block text-transparent bg-clip-text ">
              Favorite Skins
            </span>
          </h1>
          <p className="text-[0.9rem]  md:text-[.9rem] text-[#979696]">
            Upgrade your MLBB gaming with Ryumoto GFX! Enjoy free, cool skins
            for an enhanced gameplay experience.
          </p>

          {/* replace with buttons */}
          <Buttons />
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
