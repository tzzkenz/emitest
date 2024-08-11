import Marquee from "react-fast-marquee";

function TrustedPartners() {
  return (
    <div className="bg-emigrate-blue py-8 md:py-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 text-center px-4">
          Our Trusted Partners
        </h2>
        <Marquee pauseOnHover gradient={false} speed={40}>
          {[...Array(10)].map((_, index) => (
            <img
              key={index}
              src="https://via.placeholder.com/75"
              alt={`partner-logo-${index + 1}`}
              className="mx-4 md:mx-8 rounded-full w-12 h-12 md:w-16 md:h-16"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TrustedPartners;
