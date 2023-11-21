function TutorialBox(props) {
  return (
    <div>
      <div className="m-auto max-w-[330px]">
        <div className="p-20 bg-[#212121] rounded-xl"></div>
        <div className="px-2 py-3">
          <p className=" text-[1rem]">{props.title}</p>
          <p className="text-[.8rem] text-[#979696]">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TutorialBox;
