function Users() {
  return (
    <section className="p-8 md:px-15">
      <div className="px-2 md:px-40">
        <ul className="p-7 border-[1px] border-[#212121] rounded-lg max-w-full grid grid-cols-2 md:grid-cols-4 text-[#bebebe] justify-around items-center text-center gap-7">
          <li>
            <div className=" text-white font-semibold text-sm md:text-[1.1rem] leading-relaxed">
              1 Million+
            </div>
            <div>
              <p className=" text-xs">Users</p>
            </div>
          </li>
          <li>
            <div className="text-white font-semibold text-sm md:text-[1.1rem] leading-relaxed">
              20.1 MB
            </div>
            <div>
              <p className="text-xs">Size</p>
            </div>
          </li>
          <li>
            <div className="text-white font-semibold text-sm md:text-[1.1rem] leading-relaxed">
              1.86
            </div>
            <div>
              <p className="text-xs">Version</p>
            </div>
          </li>
          <li>
            <div className=" text-white font-semibold text-sm md:text-[1.1rem] leading-relaxed">
              Ryu Dev
            </div>
            <div>
              <p className="text-xs">Developer</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Users;
