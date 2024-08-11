import backgroundImage from "../../assets/bg-image-cta.png";

function CallToAction() {
  return (
    <div
      className="flex flex-col bg-cover bg-center items-center justify-center text-white py-16 md:py-24 lg:py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" bg-opacity-50 p-4 md:p-6 lg:p-8 rounded text-xl md:text-2xl lg:text-3xl font-semibold w-full md:w-3/4 lg:w-2/3 text-center">
        Search from over 17,000+ registered consultancies
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 w-full md:w-3/4 lg:w-1/2 text-center text-sm md:text-base lg:text-lg px-4">
        Find tailored guidance for every step of your emigration process,
        ensuring you secure the right job and settle comfortably
      </div>
      <button className="bg-white border-emigrate-blue rounded-xl px-6 py-3 border-4 font-semibold mt-8 md:mt-10 lg:mt-12 text-emigrate-blue text-sm md:text-base lg:text-lg hover:bg-emigrate-blue hover:text-white transition duration-300">
        Sign Up
      </button>
    </div>
  );
}

export default CallToAction;
