import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [open, setOpen] = useState(false);
  const Toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [

    {
      title: "How to update the app?",
      desc: "Open the app > Click the 'Update' button > You will be redirected to the official website of Ryumoto GFX > Click 'Download Now.' If it doesn't work, you can use the alternative download > Delete the old version before installing the new version > Your app is now updated! Enjoy!",
      Link: "https://youtu.be/PnD737MSSvA?si=o9_Njy63mv8AcJoH",
      titleLink: "Watch Video Demo",
    },

    {
      title: "Is it free to use?",
      desc: "Yes, the app is free and designed for users who prefer not to spend money in the game.",
    },

    {
      title: "How to Use Ryumoto GFX?",
      desc: "Open the app, choose a category, then select your favorite skin, and wait for the dialog indicating that the injection was successful.",
      Link: "https://www.youtube.com/watch?v=FgX4REYiH64",
      titleLink: "Watch Video Demo",
    },
    {
      title: "Which versions of the Android OS are supported?",
      desc: "The app supports Android versions from Lollipop (5) to Tiramisu (13), though some Android 13 versions are not supported.   ",
    },
    {
      title: "How to allow permission in Android 11+ OS?",
      desc: "When you're using Android 11+ operating system, a dialog will show up, prompting you to allow the permission. Simply click 'Allow' and then click 'Use this Folder'.",
      Link: "https://www.youtube.com/watch?v=DNbc0gzdt6E",
      titleLink: "Watch Video Demo",
    },
    {
      title: 'How to solve "Can\'t use this folder" ?',
      desc: "Go to the settings on your app or simply find the app 'Files by Google' or 'Files'. Open the app info and uninstall the updates. This method is different from other phones; just locate the app and uninstall the updates",
      Link: "https://www.youtube.com/watch?v=CMacWI8kp8Q",
      titleLink: "Watch Video Demo",
    },
    {
      title: "How to remove/restore skins?",
      desc: "For default skins, the first position features the default image skin of the hero with the 'Restore' text. The backup/restore skins consistently appear as the 1st image.",
      Link: "https://www.youtube.com/watch?v=YF1Q55xZVSI",
      titleLink: "Watch Video Demo",
    },
    {
      title: "How to remove pink bugs?",
      desc: 'To fix pink bugs, go to the main dashboard > click the hamburger lines in the bottom right > select the "Fix bug" button. Then, choose MLBB. You can now play without bugs.',
    },
  ];

  return (
    <section id="faqs">
      <div className="h-[1px] bg-[#212121]"></div>
      <div className="m-[10px] p-5 md:p-24 text-white mt-16 mb-24">
        <div className="">
          <p className=" text-center md:text-start font-semibold mb-[8px] text-xl md:text-2xl ">
            Frequently Asked Questions
          </p>
          <p className=" text-center md:text-start  text-sm mb-14 text-[#979696] text-l">
            Need help? How can we help you?
          </p>

          <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 justify-self-auto">
            {/* return a text and desc */}
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  Link={data.Link}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  titleLink={data.titleLink}
                  toggle={() => Toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
