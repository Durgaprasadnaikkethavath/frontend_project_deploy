import Carousel from "better-react-carousel";
import React from "react";
import { assets } from "../assets/assets";

const ImageCarousel = () => {
  return (
    <>
      <div className="image_section">
        <Carousel>
          <Carousel.Item>
            <img
              src={assets.carousel_1}
              alt="carousel"
              className="carousel_image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
