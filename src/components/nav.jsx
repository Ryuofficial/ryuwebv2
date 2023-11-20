import RyumotoLogo from "../img/ryumoto-logo.png";
function Nav() {
  return (
    <>
      <div className="flex justify-between items-center w-[92%] mx-auto p-4">
        {/* 1st box- logo */}
        <div className="flex items-center">
          <img className="w-14" src={RyumotoLogo} alt="icon" />
          <p className="text-white font-semibold text-[1rem] ml-2">
            Ryumoto GFX
          </p>
        </div>
        {/* 2nd box */}
        <div>
          <div className="border border-t-[0px] border-r-[0px] border-l-[0px] border-[#212121] md:border-none text-[#bebebe] nav-links-bar  duration-500 md:static absolute bg-[#111010] py-10 md:py-0 md:min-h-fit min-h-min left-0 top-[-100%] md:w-auto w-full flex item-center px-10">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-[#f81b3c]" href="#About">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-[#f81b3c]" href="#tutorial-section">
                  Tutorial
                </a>
              </li>
              <li>
                <a className="hover:text-[#f81b3c]" href="#Contact-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            {/* <button className="bg-[#a6c1ee] text-[#f81b3c] px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign In
          </button> */}

            <div className="md:hidden">
              <ion-icon
                style={{ fontSize: 25 }}
                color="light"
                onClick={onToggleMenu}
                name="menu"
                className="text-3xl cursor-pointer"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#212121]"></div>
    </>
  );
}

function onToggleMenu(e) {
  const navLinks = document.querySelector(".nav-links-bar");
  if (navLinks) {
    e.target.name = e.target.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[13%]");
  } else {
    console.error("Element not found!");
  }
}

export default Nav;
