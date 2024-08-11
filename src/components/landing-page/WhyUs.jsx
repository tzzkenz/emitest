import { BiPaperPlane } from "react-icons/bi";

function WhyUs() {
  const reasons = [
    {
      title: "Personalized Relocation Plans:",
      description:
        "Tailored emigration plans to fit your specific needs, ensuring a smooth transition to your new country.",
    },
    {
      title: "Expert Guidance:",
      description:
        "Access to experienced professionals who provide expert advice throughout your emigration journey.",
    },
    {
      title: "Comprehensive Support:",
      description:
        "From visa applications to job search assistance, we offer end-to-end support for all aspects of your move.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 md:py-24 lg:py-32 bg-green px-4 md:px-8">
      <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-12 md:mb-16 text-center">
        Why choose us?
      </h3>
      <div className="flex flex-col gap-12 md:gap-16 items-start my-4 w-full max-w-4xl">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start"
          >
            <BiPaperPlane
              className="mb-4 sm:mb-0 sm:mr-8 text-emigrate-blue"
              size={40}
            />
            <div>
              <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-2">
                {reason.title}
              </h4>
              <p className="text-sm sm:text-base md:text-lg">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
