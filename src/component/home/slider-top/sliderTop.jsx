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
      id: `http://www.siamcenter.co.th/public/upload/tourist-tourist-new-year-promotion-2017-12-01-103513-r.png`,
      name: '',
    },
    {
      id:
        "https://media1.popsugar-assets.com/files/thumbor/zkLy0LWu4W1slTScLAi7RPg3F7I/0x448:1444x1892/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/03/748/n/1922564/7f220a025d9628af23ed73.80809841_/i/cool-clothes-for-women.jpg",
        name: 'Black Edition',
    },
    {
      id:
        "https://droidjournal.com/wp-content/uploads/2020/06/alexandra-daddario.jpg",
        name: 'best product of the year'
    },
    {
      id:
        "https://cloud.shopymatic.com/2018/12/cara-daftar-gratis-ongkir-shopee.jpg",
        name: ''
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
                  <p className='promo-name'>{item.name}</p>
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
