import Shield from "../img/shield-v2.png";
import Restore from "../img/time.png";
import History from "../img/history.png";

function Features() {
  return (
    <section className="py-14" id="features">
      <div className="text-white mb-7 mt-3">
        <p className=" text-center font-semibold mb-[8px] text-2xl">
          Special Features
        </p>

        <p className=" text-center text-sm text-[#979696]">
          Ryumoto GFX features
        </p>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 px-7">
        {/* Feature 1 */}
        <div className="p-10 flex flex-col justify-center items-center space-y-2">
          <div>
            <img src={Shield} alt="safe and free something" width={45} />
          </div>
          <h1 className=" text-center text-2xl font-bold text-white">
            Safe and free
          </h1>
          <p className="text-sm text-center text-[#979696] md:px-10">
            Enjoy a secure and free experience with our app—your safety is our
            priority. Embark on a worry-free and user-friendly journey through
            our app's safe and free features.
          </p>
        </div>

        {/* Feature 2 */}

        <div className="p-10 flex flex-col justify-center items-center space-y-2">
          <div>
            <img src={Restore} alt="safe and free something" width={60} />
          </div>
          <h1 className=" text-center text-2xl font-bold text-white">
            Restore All
          </h1>
          <p className="text-sm text-center text-[#979696] md:px-10">
            If you want to remove all injected skins in one click, you can use
            the 'Restore All' feature on the History page—easy, fast, and
            reliable.
          </p>
        </div>

        {/* Feature 3 */}

        <div className="p-10 flex flex-col justify-center items-center space-y-2">
          <div>
            <img src={History} alt="safe and free something" width={45} />
          </div>
          <h1 className="text-center text-2xl font-bold text-white">History</h1>
          <p className="text-sm text-center text-[#979696] md:px-10">
            You can track all your injected skins on the History page, making it
            easy for you to remove them when you need to get rid of the skins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
