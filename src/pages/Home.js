import React from "react";
import "./home.css";
import Slider from "react-slick";

import Navbar from "../component/home/navbar/navbar";
import SidebarMenu from "../component/home/sidebar-menu/sidebar-menu";
import SliderTop from "../component/home/slider-top/sliderTop";
import NewProduct from '../component/home/newProduct/newProduct';
import PopularProduct from '../component/home/popular/popular';

import "../component/home/category-slider/categorySlider.css";
import { category } from "../assets/category";

import prevArrow from '../assets/image/prevArrow.png';
import nextArrow from '../assets/image/nextArrow.png';


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        padding: "2.5vw",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: '1px .3px #999999'
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
        zIndex: 9999,
        padding: "2.5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        boxShadow: '-1px .3px #999999'
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt='' className='topslider-arrow' />
    </div>
  );
};

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {category.map((item, index) => {
            return (
              <div className='category-items' key={index} >
                <div className='cat-item' style={{ background: item.color }}>
                  <p className='category-name'>{item.name}</p>
                  <img src={item.image} alt='' className='category-img' />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <SidebarMenu />
        </div>
      </div>
      <div className='content'>
        <div className='row section-top-slider'>
          <div className='col-md-12'>
            <SliderTop />
          </div>
        </div>
        <div className='row section-category-slider'>
          <div className='col-md-3 category-description'>
            <div className='category-title'>
              <h2 className="section-title">Category</h2>
              <p>What are you currently looking for</p>
            </div>
            <div className='next-prev-btn'>
              <button className='btn-prev shadow'>
                <img src={prevArrow} alt="" />
              </button>
              <button className='btn-next shadow'>
              <img src={nextArrow} alt="" />
              </button>
            </div>
          </div>
          <div className='col-md-9 category-slider'>
            <CategorySlider />
          </div>
        </div>
        <div className='row section-new-product'>
            <NewProduct />
        </div>
        <div className='row section-popular-product'>
            <PopularProduct />
        </div>
      </div>
    </>
  );
};
export default Home;
