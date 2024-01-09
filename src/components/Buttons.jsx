import { ApkVersion } from "../index";

const Buttons = () => {
  const handleDownloadClick = () => {
    const fileUrl = process.env.PUBLIC_URL + "/RyumotoGFX.apk";
    const fileName = `RyumotoGFX[${ApkVersion}].apk`;

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  };

  const handlePlaystoreClick = () => {
    // Redirect to youtube.com
    window.location.href =
      "https://www.mediafire.com/file/n3rq03hkg98j8cy/RyumotoGFX+[1.90].apk/file";
  };

  return (
    <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
      <div
        className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-white bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#ff0000] to-[#7e0316] p-3 md:py-2 md:px-5 rounded-full active:text-[#212121]"
        onClick={handleDownloadClick}
      >
        Download Now
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
