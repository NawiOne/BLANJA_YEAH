import React from "react";
import "../newProduct/new-product.css";

import kaos from "../../../assets/image/kaos.jpg";
import star from "../../../assets/image/Star.png";
const data = [1, 2, 3, 4, 5, 6, 8, 9, 0];

const PopularProduct = () => {
  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title'>Popular</h2>
        <p>Find clothes that are trending recently</p>
      </div>
      {data.map((item, index) => {
        return (
          <div className='col-sm-6 col-md-3 col-xl-2 item-new-product' key={index}>
            <div className='card card-item-new shadow'>
              <img
                src={kaos}
                className='card-img-top img-new-product img-fluid'
                alt='...'
              />
              <div className='card-body card-body-new-product'>
                <p className='new-product-name'>
                  Men's formal suit - Black & White
                </p>
                <div>
                  <p className='product-price'>$ 40.0</p>
                  <p className='product-store'>Zahra cloth</p>
                  <div className='product-rating'>
                    <div>
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                    </div>
                    <div className='qty-rating'>(10)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PopularProduct;
