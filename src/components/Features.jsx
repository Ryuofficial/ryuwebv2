import FeaturesBox from "./FeaturesBox";
import SafeIMG from "../img/shield-v2.webp";
import RestoreIMG from "../img/time.webp";
import HistoryIMG from "../img/history.webp";

const FeatureBoxData = [
  {
    Title: "Safe and free",
    desc: " Enjoy a secure and free experience with our app—your safety is our priority.",
    altText: "safe and free something",
    myKey: "734d035a-90b6-11ee-b9d1-0242ac120002",
    icon: SafeIMG,
  },
  {
    Title: "Restore All",
    desc: " If you want to remove all injected skins in one click, you can use the 'Restore All' feature on the History page.",
    altText: "Restore something",
    myKey: "79aaeac8-90b6-11ee-b9d1-0242ac120002",
    icon: RestoreIMG,
  },
  {
    Title: "History",
    desc: "   You can track all your injected skins on the History page.",
    altText: "History something",
    myKey: "7ff51ebc-90b6-11ee-b9d1-0242ac120002",
    icon: HistoryIMG,
  },
];

function Features() {
  const title = "Special Features";
  const description = "Ryumoto GFX features";

  return (
    <section className="py-14" id="features">
      {/* Title and desc */}
      <div className="text-white mb-16 mt-3">
        <p className="text-center font-semibold mb-[8px] text-2xl">{title}</p>
        <p className="text-center text-sm text-[#979696]">{description}</p>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 px-5 md:px-10">
        {FeatureBoxData.map(({ myKey, Title, desc, icon, altText }) => (
          <FeaturesBox
            key={myKey}
            title={Title}
            desc={desc}
            myIcon={icon}
            altText={altText}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
