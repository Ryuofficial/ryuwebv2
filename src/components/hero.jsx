import Mockup from "../img/mockUp.webp";
import Buttons from "./Buttons";
import { TypeAnimation } from "react-type-animation";

function hero() {
  return (
    <section>
      <div className="text-center md:max-w-[1200px] p-8 md:p-20  grid grid-cols-1 md:grid-cols-2 md:text-start gap-10">
        <div className="mt-10 ">
          <h1 className="leading-normal text-[2rem] whitespace-nowrap md:whitespace-wrap md:text-[3rem] font-bold text-white">
            <span className="bg-gradient-to-r from-[#ff0000]  to-[#940c21] inline-block text-transparent bg-clip-text">
              Unlock your
            </span>

            <br />
            <TypeAnimation
              sequence={[
                "Favorite Skins",
                1000,
                "Favorite Recalls",
                1000,
                "Favorite Emotes",
                1000,
                "Favorite Maps",
                1000,
                "Favorite Trails",
                1000,
              ]}
              className=""
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <div>
            <p className="text-[0.9rem]  md:text-[.9rem] text-[#979696] mt-10">
              Upgrade your MLBB gaming experience with Ryumoto GFX MLBB Skin
              Injector! Enjoy free, cool skins for an enhanced gameplay
              experience.
            </p>
          </div>

          {/* replace with buttons */}
          <Buttons />
        </div>
        <div className="flex justify-center ">
          <img
            src={Mockup}
            alt="something mock-up"
            style={{ width: "200px", height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default hero;
