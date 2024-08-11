import hero from "../../assets/hero-image.png";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-32 justify-around items-center mt-16 md:mt-0">
      <div className="w-full md:w-2/5 text-center md:text-left mb-8 md:mb-0">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 md:py-8 leading-tight md:leading-normal">
          Your Next Chapter Begins Here
        </h1>
        <h3 className="font-base text-base sm:text-lg md:text-xl leading-relaxed md:leading-normal">
          Connecting you with employers worldwide and guiding your emigration
          journey.
        </h3>
      </div>
      <div className="w-full md:w-auto">
        <img src={hero} alt="hero" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
