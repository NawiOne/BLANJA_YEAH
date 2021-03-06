import React from "react";
import Slider from "react-slick";
import "./categorySlider.css";
import { category } from "../../../assets/category";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrow: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
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
              <Link>
                <div className='category-items' key={index}>
                  <div className='cat-item' style={{ background: item.color }}>
                    <p className='category-name'>{item.name}</p>
                    <img src={item.image} alt='' className='category-img' />
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default CategorySlider;
