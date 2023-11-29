import { MdAdminPanelSettings, MdRestorePage } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";

function Features() {
  return (
    <section className="py-14" id="features">
      <div className="text-white mb-7 mt-3">
        <p className=" text-center font-semibold mb-[8px] text-2xl">
          Special Features
        </p>

        <p className=" text-center text-sm text-[#979696] text-l">
          Ryumoto GFX features
        </p>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 px-6">
        {/* Feature 1 */}
        <div className="p-10 flex flex-col justify-center items-center space-y-2">
          <div>
            <MdAdminPanelSettings fontSize={45} color="#bebebe" />
          </div>
          <h1 className=" text-center text-2xl font-bold  bg-gradient-to-r from-[#ff0000]  to-[#c7132e] inline-block text-transparent bg-clip-text">
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
            <MdRestorePage fontSize={45} color="#bebebe" />
          </div>
          <h1 className=" text-center text-2xl font-bold bg-gradient-to-r from-[#ff0000]  to-[#c7132e] inline-block text-transparent bg-clip-text">
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
            <FaNewspaper fontSize={39} color="#bebebe" />
          </div>
          <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-[#ff0000]  to-[#c7132e] inline-block text-transparent bg-clip-text">
            History
          </h1>
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
