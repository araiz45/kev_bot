interface comingProp {
  heading: string;
  para: string;
}

const Hero: React.FC<comingProp> = ({ heading, para }) => {
  return (
    <div className="hero ">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-4xl font-bold text-white">{heading}</h1>
        <div
          className="text-xl text-gray-400 text-center"
          dangerouslySetInnerHTML={{ __html: para }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
