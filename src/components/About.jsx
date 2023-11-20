function About() {
  return (
    // 1st about info
    <div
      id="About"
      className=" mt-2 p-8 md:px-15 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-40 justify-center text-white items-center space-y-5"
    >
      <div className="order-2 md:order-1">
        <div
          id="box-des"
          className="mx-auto max-w-[450px] mt-4 md:mt-0 p-20 bg-[#212121] h-[300px] rounded-xl "
        ></div>
      </div>
      <div className="order-1 md:order-2">
        <div>
          <p className=" text-center font-semibold mb-5 text-2xl">
            About the app
          </p>
          <div>
            <p className="p-5 md:p-10 text-center text-[0.9rem] text-[#979696]">
              Ryumoto GFX is a free and secure app that provides you with MLBB
              visual skins to enhance your gaming skills. Our app is cost-free,
              ensuring that everyone can enjoy a premium visual experience
              without any charges. It is compatible with Android versions 5 to
              13.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
