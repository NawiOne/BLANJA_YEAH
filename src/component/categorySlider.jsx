import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getByCategoryCreator, getCategoryNameCreator } from "../redux/action/product";

import {category} from '../assets/category';
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
          boxShadow: "1px .3px #999999",
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
          boxShadow: "-1px .3px #999999",
        }}
        onClick={onClick}
      >
        <img src={prevArrow} alt='' className='topslider-arrow' />
      </div>
    );
  };
  
  class CategorySlider extends React.Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
  
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
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
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              {category.map((item, index) => {
                return (
                  <div className='category-items' key={index}>
                    <Link to='/category'>
                      <div
                        className='cat-item'
                        style={{ background: item.color }}
                        onClick={() => {
                         this.props.getByCategoryCreator(item.name)
                         this.props.getCategoryNameCreator(item.name)
                        }}
                      >
                        <p className='category-name'>{item.name}</p>
                        <img src={item.image} alt='' className='category-img' />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
            <div className='next-prev-btn'>
              <button className='btn-prev shadow' onClick={this.previous}>
                <img src={prevArrow} alt='' />
              </button>
              <button className='btn-next shadow' onClick={this.next}>
                <img src={nextArrow} alt='' />
              </button>
            </div>
          </div>
        </>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getByCategoryCreator: (category) => {
            dispatch(getByCategoryCreator(category));
        },
        getCategoryNameCreator: (name) => {
            dispatch(getCategoryNameCreator(name))
        }
    };
};

export default connect(null, mapDispatchToProps)(CategorySlider)
