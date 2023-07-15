import { useState } from "react";
import garcy from "../assets/garcy.jpg";
import Slider from "react-slick";
import "../home/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CustomCarousal() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed:2000,
  };
  return (
    <Slider {...settings}>
      {Array.from({ length: 5 }).map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-3 carousal-items-container">
            <img src={garcy} className="object-cover rounded-full expert-img" />
            <div className="col-span-2 grid grid-rows-4 pl-12 pt-10">
              <div>
                <h2 className="text-5xl text-white font-bold">
                  Georgia Darcy
                </h2>
                <p className="text-sm text-gray-500 mt-4">
                  The agency founder
                </p>
              </div>

              <p className="row-span-2 text-gray-100">
                With over twenty years of industry experience, 'Darcy's
                insurance products* has learned a lot. The one thing we know for
                sure is that we're all about you. If you find searching for
                insurance frustrating. we are here to help.
              </p>
              <button className="contact-us hover:opacity-80 py-3 w-80 h-14 rounded-full text-black font-semibold text-lg border-blue btn-primary">
                Get a consultation
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
