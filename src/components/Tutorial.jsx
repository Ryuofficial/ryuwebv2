import TutorialBox from "./TutorialBox";
import DataVideo from "./dataVideo";

function Tutorial() {
  return (
    <div
      id="tutorial-section"
      className="text-white mt-10 p-8 md:px-15 md:px-39 mb-16"
    >
      <div className="mt-5 md:mt-0">
        <p className=" text-center font-semibold mb-[8px] text-2xl">
          Tutorial Videos
        </p>

        <p className=" text-center text-sm mb-14 text-[#979696] text-l">
          Watch these tutorial if you're new
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-self-auto">
          {DataVideo.map((data) => {
            return (
              <TutorialBox
                title={data.title}
                desc={data.desc}
                link={data.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
