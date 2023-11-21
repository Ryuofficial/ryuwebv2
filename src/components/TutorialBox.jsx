function TutorialBox(props) {
  const handleViewClick = () => {
    if (props.link) {
      window.location.href = props.link;
    }
  };

  return (
    <div>
      <div className="m-auto max-w-[330px] ">
        {/* the box */}
        <div
          onClick={handleViewClick}
          className="hover:shadow-darkShadow transition-all p-20 bg-[#0a0a0a] rounded-xl flex justify-center items-center"
        >
          <ion-icon style={{ fontSize: 30 }} name="play-outline"></ion-icon>
        </div>

        {/* the title and description */}
        <div className="px-2 py-3">
          <p className=" text-[1rem]">{props.title}</p>
          <p className="text-[.8rem] text-[#979696]">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TutorialBox;
