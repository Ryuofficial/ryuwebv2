function Contact() {
  return (
    <div
      id="Contact-section"
      className=" space-x-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-white p-10 pt-0 md:px-[10rem] bg-[#060606] h-screen justify-center items-center"
    >
      <div>
        <p className="text-start font-semibold mb-5 text-xl">Lets Connect</p>
        <p className="text-start text-[0.9rem] text-[#979696]">
          If you have question or issue about the app you can contact the
          developer below.
        </p>
        <div className=" flex justify-start mt-2">
          <a className="text-[.84rem]" href="/">
            Telegram
          </a>
        </div>
      </div>

      <div>
        <p className="text-[0.9rem] text-center md:text-start text-[#979696]">
          @2023 Ryu developer. All right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact;
