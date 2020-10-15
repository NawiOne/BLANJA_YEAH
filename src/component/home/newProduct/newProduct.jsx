import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./new-product.css";
import InfiniteScroll from "react-infinite-scroll-component";

import { useSelector, useDispatch } from "react-redux";
import {
  getDetailCreator,
  getMoreNewProductCreator,
} from "../../../redux/action/product";

import star from "../../../assets/image/Star.png";

const NewProduct = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    setPage(page + 1);
    setTimeout(() => {
      dispatch(getMoreNewProductCreator(page));
      console.log("horeeee");
    }, 1000);
  };

  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title'>New</h2>
        <p className='title-description'>You’ve never seen it before!</p>
      </div>
      <InfiniteScroll
        dataLength={product.newProduct.length}
        next={fetchMoreData}
        hasMore={true}
        endMessage= {null}
        className='row'
      >
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
                      <p className='product-price'>$ {item.price}</p>
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
      </InfiniteScroll>
    </>
  );
};

export default NewProduct;
