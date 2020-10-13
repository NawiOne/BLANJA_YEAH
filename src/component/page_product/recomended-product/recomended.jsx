import React from "react";
import { Link } from "react-router-dom";
import "../../home/newProduct/new-product.css";

import kaos from "../../../assets/image/kaos.jpg";
import star from "../../../assets/image/Star.png";
const data = [1, 2, 3, 4, 5, 6, 8, 9, 0];

const RecomendedProduct = () => {
  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title'>You can also like this</h2>
        <p className='title-description'>You’ve never seen it before!</p>
      </div>
      {data.map((item, index) => {
        return (
          <div className='col-6 col-md-3 col-xl-2 item-new-product' key={index}>
            <Link
              to='/product'
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default RecomendedProduct;
