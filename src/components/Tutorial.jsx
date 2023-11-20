import TutorialBox from "./TutorialBox";
import DataVideo from "./dataVideo";

function Tutorial() {
  return (
    <div
      id="tutorial-section"
      className="text-white mt-10 p-8 md:px-15 md:px-40 mb-16"
    >
      <div className="mt-5 md:mt-0">
        <p className=" text-center font-semibold mb-10 text-2xl">
          Tutorial Videos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-center">
          {DataVideo.map((data) => {
            return <TutorialBox title={data.title} desc={data.desc} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
