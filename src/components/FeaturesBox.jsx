function FeaturesBox(props) {
  return (
    <div className="p-10 flex flex-col justify-center items-center space-y-2">
      <div>
        <img src={props.myIcon} alt={props.altText} width={45} />
      </div>
      <h1 className=" text-center text-[1.35rem] font-medium  text-white">
        {props.title}
      </h1>
      <p className="text-sm text-center text-[#979696] md:px-10">
        {props.desc}
      </p>
    </div>
  );
}

export default FeaturesBox;
