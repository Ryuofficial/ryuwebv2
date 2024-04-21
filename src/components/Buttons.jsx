// import { ApkVersion } from "../index";
// import { useState } from "react";
// import LoadingAnimation from "./LoadingAnimation";

// const Buttons = () => {
//   const [isStarted, setisStarted] = useState(false);
//   const handleDownloadClick = () => {
//     const fileUrl = process.env.PUBLIC_URL + "/RyumotoGFX.apk";
//     const fileName = `RyumotoGFX [${ApkVersion}] - ${Math.random()
//       .toString(36)
//       .substring(7)}.apk`;

//     // Create a temporary anchor element
//     const anchor = document.createElement("a");
//     anchor.href = fileUrl;
//     anchor.download = fileName;

//     // Append the anchor to the body
//     document.body.appendChild(anchor);

//     // Trigger a click event on the anchor
//     anchor.click();

//     // Remove the anchor from the bodys
//     document.body.removeChild(anchor);

//     window.location.href = "https://zeekaihu.net/4/7031347";
//   };

//   const handlePlaystoreClick = () => {
//     // Redirect to youtube.com
//     window.location.href =
//       "https://www.mediafire.com/file/kb2hoprm9013p2x/Ryumoto+GFX+[1.99].apk/file";
//   };

//   return (
//     <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
//       <div
//         className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-white bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#ff0000] to-[#7e0316] p-3 md:py-2 md:px-5 rounded-full active:text-[#212121]"
//         onClick={handleDownloadClick}
//       >
//         {(isStarted = false ? "Download Now" : <LoadingAnimation />)}
//       </div>
//       <div
//         className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#ff0000] to-[#7e0316] rounded-full md:text-sm"
//         onClick={handlePlaystoreClick}
//       >
//         <span className="transition-all flex w-full h-full bg-[#111010] text-white rounded-full p-[2px] justify-center items-center  active:shadow-pinkShadow active:text-[#ff0000]">
//           <button className="m-[7px]">Alternative download</button>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Buttons;

import { ApkVersion } from "../index";
import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

const Buttons = () => {
  const [isStarted, setIsStarted] = useState(false); // Changed the state variable name
  const handleDownloadClick = () => {
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
  };

  const handlePlaystoreClick = () => {
    window.location.href =
      "https://www.mediafire.com/file/bm2hrcrvzkzkjau/Ryumoto+GFX+[1.99].apk/file";
  };

  return (
    <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
      <div
        className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-white bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#ff0000] to-[#7e0316] p-3 md:py-2 md:px-5 rounded-full active:text-[#212121]"
        onClick={handleDownloadClick}
      >
        {!isStarted ? "Download Now" : <LoadingAnimation />}
      </div>

      <div
        className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#ff0000] to-[#7e0316] rounded-full md:text-sm"
        onClick={handlePlaystoreClick}
      >
        <span className="transition-all flex w-full h-full bg-[#111010] text-white rounded-full p-[2px] justify-center items-center  active:shadow-pinkShadow active:text-[#ff0000]">
          <button className="m-[7px]">Alternative download</button>
        </span>
      </div>
    </div>
  );
};

export default Buttons;
