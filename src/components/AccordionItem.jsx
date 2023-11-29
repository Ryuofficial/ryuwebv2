import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Collapse } from "react-collapse";

function AccordionItem({ open, toggle, title, desc, videoLink }) {
  return (
    <div>
      <div className="border-b-[1px] border-[#212121] ">
        <div
          className=" p-3 md:p-5 flex justify-between items-center "
          onClick={toggle}
        >
          <p className="text-[13.5px] md:text-[15px] font-medium p-[4px] md:p-[3.5px] text-[#e2e2e2]">
            {title}
          </p>
          <div>
            {open ? (
              <IoIosArrowUp fontSize={12} />
            ) : (
              <IoIosArrowDown fontSize={12} />
            )}
          </div>
        </div>

        <Collapse isOpened={open}>
          <div className="text-[12px] md:text-[13.5px] text-[#979696] px-4 pb-4 md:px-5 rounded-b-[0.3rem]">
            {desc}
            <br />
            <br />

            {videoLink ? (
              <a
                href={videoLink}
                className="underline md:cursor-pointer text-[11px] underline-offset-[4px] active:text-red-500"
              >
                Watch Video Demo
              </a>
            ) : (
              ""
            )}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default AccordionItem;
