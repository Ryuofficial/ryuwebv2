import { ApkVersion } from "../index";
import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import warningImg from "../img/warning.webp";

const Buttons = () => {
  const [isStarted, setIsStarted] = useState(false);
  let isDownloading = false;
  const handleDownloadClick = () => {
    if (isDownloading) return; // If download is in progress, don't start another
    isDownloading = true; // Set flag to indicate download is in progress

    const fileUrl = process.env.PUBLIC_URL + "/RyumotoGFX.apk";
    const fileName = `RyumotoGFX [${ApkVersion}] - ${Math.random()
      .toString(36)
      .substring(7)}.apk`;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
    window.location.href = "https://zeekaihu.net/4/7031347";
    setIsStarted(true);
    // Delay setting isDownloading to false to ensure the download completes before allowing another
    setTimeout(() => {
      isDownloading = false;
    }, 2000);
  };

  const handlePlaystoreClick = () => {
    window.open(
      "https://www.mediafire.com/file/crh26bdzgija62t/Ryumoto+GFX+[2.4].apk/file",
      "_blank"
    );
  };

  return (
    <div>
      <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
        {/* Direct Download now button */}
        <div
          className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-white bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#ff0000] to-[#7e0316] p-3 md:py-2 md:px-5 rounded-full active:text-[#212121] font"
          onClick={handleDownloadClick}
        >
          {!isStarted ? "Download Now" : <LoadingAnimation />}
        </div>

        {/* Mediafire Download Button */}
        <div
          className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#ff0000] to-[#7e0316] rounded-full md:text-sm"
          onClick={handlePlaystoreClick}
        >
          <span className="transition-all flex w-full h-full bg-[#111010] text-white rounded-full p-[2px] justify-center items-center  active:shadow-pinkShadow active:text-[#ff0000]">
            <button className="m-[7px]">Alternative download</button>
          </span>
        </div>
      </div>

      <div className=" text-[#b0b1b0] bg-[#111010] text-center mt-3 border-t-[.5px] border-b-[2px] border-x-[.5px] border-[#5e5d5d] px-[10px] py-[15px] text-[0.7rem] opacity-[0.8] rounded-[4px] flex justify-center items-center md:hidden">
        <img
          className="mx-2"
          src={warningImg}
          alt="warning-something"
          style={{ width: "17px", height: "17px" }}
        />

        <div>
          Uninstall the app before playing. Reinstall if you want to inject
          again for 100% no ban.
        </div>
      </div>
    </div>
  );
};

export default Buttons;
