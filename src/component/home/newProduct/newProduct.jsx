import React from "react";
import { Link } from "react-router-dom";
import "./new-product.css";

import { useSelector, useDispatch } from "react-redux";
import { getDetailCreator } from "../../../redux/action/product";

import star from "../../../assets/image/Star.png";

const NewProduct = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title'>New</h2>
        <p className='title-description'>You’ve never seen it before!</p>
      </div>
      {product.newProduct.map((item, index) => {
        return (
          <div
            className='col-6 col-md-3 col-xl-2 item-new-product'
            key={index}
            onClick={() => {
              dispatch(getDetailCreator(item.id));
            }}
          >
            <Link
              to='/product'
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className='card card-item-new shadow'>
                <img
                  src={item.image.split(",")[0]}
                  className='card-img-top img-new-product img-fluid'
                  alt='...'
                />
                <div className='card-body card-body-new-product'>
                  <p className='new-product-name'>{item.name_product}</p>
                  <div className='new-product-description'>
                    <p className='product-price'>
                      {new Intl.NumberFormat("USD", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}
                    </p>
                    <p className='product-store'>{item.brand}</p>
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

export default NewProduct;
