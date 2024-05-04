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
      title:
        'How get rid of "Your account has been disconnected from the server" message?',
      desc: "After injecting the skin, you need to uninstall the app (Ryumoto V2) before playing the game to prevent the message 'Your account has been disconnected from the server' from appearing. If you wish to inject a skin again, install the app and uninstall it again before playing",
    },

    {
      title: "How to update the app?",
      desc: "Open the app > Click the 'Update' button > You will be redirected to the official website of Ryumoto GFX > Click 'Download Now.' If it doesn't work, you can use the alternative download > Delete the old version before installing the new version > Your app is now updated! Enjoy!",
      Link: "https://youtu.be/PnD737MSSvA?si=o9_Njy63mv8AcJoH",
      titleLink: "Watch Video Demo",
    },

    {
      title: "How to use Manual inject for Android 11 - 14 Version",
      desc: "Watch the tutorial on how to manually inject in Ryumoto V2, guaranteed to work on Android 11-14 Version.",
      Link: "https://www.youtube.com/watch?v=EK9NQ4BtHlw",
      titleLink: "Watch Video Demo",
    },

    {
      title: "How to use Shizuku for Android 11 - 14 Version (New method)",
      desc: "Watch the tutorial on how to set up Shizuku and inject in Ryumoto V2, guaranteed to work on Android 11-14 Version.",
      Link: "https://youtu.be/HBuLlHP_uXw?si=82VLyN6dH8VeKigl",
      titleLink: "Watch Video Demo",
    },

    {
      title: "Is it free to use?",
      desc: "Yes, the app is free and designed for users who prefer not to spend money in the game.",
    },

    {
      title: "How to Use Ryumoto V2?",
      desc: "Open the app, choose a category, then select your favorite skin, and wait for the dialog indicating that the injection was successful.",
      Link: "https://www.youtube.com/watch?v=FgX4REYiH64",
      titleLink: "Watch Video Demo",
    },
    {
      title: "Which versions of the Android version are supported?",
      desc: "The app supports Android versions from Lollipop (5) to Upside Down Cake (14). Use Shizuku to make it work on all Android versions",
    },
    {
      title: "How to allow permission in Android 11-14 version (Old method)",
      desc: "When using Android versions 11-14, a dialog will appear, prompting you to grant permission. Simply click 'Allow' and then 'Use this Folder'. \n If you encounter 'Can't use this folder', you may need to use the Shizuku method.",
      Link: "https://www.youtube.com/watch?v=DNbc0gzdt6E",
      titleLink: "Watch Video Demo",
    },
    {
      title: 'How to solve "Can\'t use this folder" ? (Old method)',
      desc: "Go to the settings on your app or simply find the app 'Files by Google' or 'Files'. Open the app info and uninstall the updates. This method is different from other phones; just locate the app and uninstall the updates",
      Link: "https://www.youtube.com/watch?v=CMacWI8kp8Q",
      titleLink: "Watch Video Demo",
    },
    {
      title: "How to remove/restore skins?",
      desc: "For default skins, the first position features the default image skin of the hero with the 'Restore' text. The backup/restore skins always appear in the 1st image/position.",
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
