import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../component/home/newProduct/new-product.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetailCreator,
  getMoreCatCreator,
} from "../../redux/action/product";

import star from "../../assets/image/Star.png";

const Category = () => {
  const { product } = useSelector((state) => state);
  const [page, setPage] = useState(2);
  console.log(product)

  const dispatch = useDispatch();

  const fetchMoreData = () => {
    if (product.pageInfo !== undefined || product.pageInfo.nextPage !== "") {
      setPage(page + 1);
      setTimeout(() => {
        dispatch(getMoreCatCreator(product.categoryName, page));
        console.log("horeeee");
      }, 1000);
    }
  };

  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title mb-3'>{product.categoryName}</h2>
      </div>
      <InfiniteScroll
        dataLength={product.product.length}
        next={fetchMoreData}
        hasMore={true}
        className='row'
        loader={
           product.pageInfo === undefined ? null : product.pageInfo.nextPage === "" ? null :
              <div className='col-12' style={{
                textAlign: 'center'
              }}>
                <div class='spinner-border' role='status'>
                  <span class='sr-only'>Loading...</span>
                </div>
              </div>

        }
      >
        {product.product.map((item, index) => {
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
                    <div>
                      <p className='product-price'>{new Intl.NumberFormat("USD", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}</p>
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

export default Category;
