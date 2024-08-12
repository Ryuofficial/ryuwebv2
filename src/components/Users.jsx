import { ApkVersion } from "../index";

function Users() {
  return (
    <section id="more-info" className="p-8 md:px-15">
      <div className="px-2 md:px-40">
        <ul className="p-7 border-[1px] border-[#212121] rounded-lg max-w-full grid grid-cols-2 md:grid-cols-3 text-[#bebebe] justify-around items-center text-center gap-7">
          <li>
            <div className=" text-white font-semibold text-[.75rem] md:text-[.90rem] leading-relaxed">
              Aug 10, 2024
            </div>
            <div>
              <p className="text-xs">Last Update</p>
            </div>
          </li>

          <li>
            <div className=" text-white font-semibold text-[.75rem] md:text-[.90rem] leading-relaxed">
              1 M+
            </div>
            <div>
              <p className=" text-xs">Downloads</p>
            </div>
          </li>
          <li>
            <div className="text-white font-semibold text-[.75rem] md:text-[.90rem] leading-relaxed">
              16.12 MB
            </div>
            <div>
              <p className="text-xs">Size</p>
            </div>
          </li>
          <li>
            <div className="text-white font-semibold text-[.75rem] md:text-[.90rem] leading-relaxed">
              {ApkVersion}
            </div>
            <div>
              <p className="text-xs">Version</p>
            </div>
          </li>
          <li>
            <div className=" text-white font-semibold text-[.75rem]  md:text-[.90rem] leading-relaxed">
              Ryu Dev
            </div>
            <div>
              <p className="text-xs">Developer</p>
            </div>
          </li>

          <li>
            <div className=" text-white font-semibold text-[.75rem] md:text-[.90rem] leading-relaxed">
              Android
            </div>
            <div>
              <p className="text-xs">Platform</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Users;
