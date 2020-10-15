import React from "react";
import Slider from "react-slick";
import "./slider-top.css";
import nextArrow from "../../../assets/image/nextArrow.png";
import prevArrow from "../../../assets/image/prevArrow.png";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        padding: "1.5vw",
        borderRadius: "50%",
        marginRight: "3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}
      onClick={onClick}
    >
      <img src={nextArrow} alt='' className='topslider-arrow' />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        marginLeft: "3vw",
        zIndex: 1,
        padding: "1.5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt='' className='topslider-arrow' />
    </div>
  );
};

const SliderTop = () => {
  const data = [
    {
      id: `https://cdn.21buttons.com/posts/1080x1095/a63583cf5ca24d91b554c1d84b97817c_1080x1095.jpg`,
    },
    {
      id:
        "https://media1.popsugar-assets.com/files/thumbor/zkLy0LWu4W1slTScLAi7RPg3F7I/0x448:1444x1892/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/03/748/n/1922564/7f220a025d9628af23ed73.80809841_/i/cool-clothes-for-women.jpg",
    },
    {
      id:
        "https://th-test-11.slatic.net/p/67e08e6343fb930c3db67a6befe69efc.jpg_720x720q80.jpg_.webp",
    },
    {
      id:
        "https://cdn.21buttons.com/posts/1080x1207/97b323da03474f6e90dd249907746993_1080x1207.jpg",
    },
  ];

  const settings = {
    dots: true,
    className: "top-slider",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className='topslider-items' key={index}>
                <div className='topslider-item'>
                  <img
                    src={item.id}
                    alt=''
                    className='slider-top-img img-fluid'
                  />
                  <p className='promo-name'>Black Edition</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default SliderTop;
