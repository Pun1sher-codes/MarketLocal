import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "800px", height: "300px" }}>
      <Slider {...settings}>
        <div>
          <img
            className="imgCarousel"
            src="/slider/christmassale.png"
            alt="Image 1"
            style={{ width: "800px", height: "300px" }}
          />
        </div>
        <div>
          <img
            className="imgCarousel"
            src="/slider/12.12.png"
            alt="Image 2"
            style={{ width: "800px", height: "300px" }}
          />
        </div>
        <div>
          <img
            className="imgCarousel"
            src="/slider/kingkongchips.png"
            alt="Image 3"
            style={{ width: "800px", height: "300px" }}
          />
        </div>
        <div>
          <img
            className="imgCarousel"
            src="/slider/pamaypay.png"
            alt="Image 3"
            style={{ width: "800px", height: "300px" }}
          />
        </div>
        <div>
          <img
            className="imgCarousel"
            src="/slider/handmadecraft.png"
            alt="Image 3"
            style={{ width: "800px", height: "300px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
