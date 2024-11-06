import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import image1 from "../../static/images/bannerImg1.png";
import image2 from "../../static/images/bannerImg2.png";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Improve Your Lifestyle Now!",
      description:
        "Click Here!! ",
    },
    {
      id: 2,
      image: image2,
      title: "Checkout Our New Arrivals",
      description:
      "Click Here!! ",
    },
  ];

  return (
    <div className='bannerContainer'>
    {slides.length === 0 ? (
      <h4>No Images Available</h4>
    ) : (
      <div className='bannerSlider'>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div className='bannerSlide' key={slide.id}>
              <div className='bannerImageContainer'>
                <img
                  className='bannerImage'
                  loading="eager"
                  src={slide.image}
                  alt={`Banner image: ${slide.id}`}
                />
              </div>
              <div className='bannerText'>
                <h1>{slide.title}</h1>
                <a href="/Store">{slide.description}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )}
  </div>
  );
}