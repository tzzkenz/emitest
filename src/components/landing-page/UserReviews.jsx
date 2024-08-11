import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Sarah J",
    review:
      "Thanks to Santamonica, my dream of moving abroad became a reality! The process was seamless, and I found a fantastic job within weeks. Highly recommended!",
  },
  {
    name: "John D",
    review:
      "The guidance and support I received were outstanding. Moving abroad was much easier than I thought!",
  },
  {
    name: "Emily R",
    review:
      "A wonderful service that made my transition to a new country smooth and hassle-free. I can't thank them enough!",
  },
];

function UserReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          Get Verified User Reviews
        </h3>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="bg-white text-emigrate-blue shadow-lg rounded-lg p-8 md:p-10 lg:p-12 mx-4">
                  <div className="font-semibold text-lg sm:text-xl md:text-2xl text-center mb-4">
                    {review.name}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-center italic">
                    {review.review}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default UserReviews;
