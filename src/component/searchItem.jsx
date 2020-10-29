import React, { useState} from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "../component/home/newProduct/new-product.css";
import { useSelector, useDispatch } from "react-redux";
import { getDetailCreator, searchMoreCreator, clearSearchCreator } from "../redux/action/product";

import star from "../assets/image/Star.png";

const Empty = () => {
  return (
    <div
      className='col-12'
      style={{
        marginTop: "20vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Sorry.. product not found
      </p>
    </div>
  );
};

const SearchItem = (props) => {
  const { product } = useSelector((state) => state);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const searchMoreData = () => {
    if (product.pageInfo.nextPage !== "") {
      setPage(page + 1);
      setTimeout(() => {
        dispatch(
          searchMoreCreator(
            product.searchKey.key,
            product.searchKey.filter,
            page,
          ),
        );
      }, 1000);
    } else return;
  };

  return (
    <>
      <div className='col-12 mb-3'>
        <h2 className='section-title mb-5' style={{ marginLeft: "-1vw" }}>
          Searching for '{product.searchKey.key}'
        </h2>
      </div>
      {!product.searchProduct.length ? (
        <Empty />
      ) : (
        <InfiniteScroll
          dataLength={product.searchProduct.length}
          next={searchMoreData}
          hasMore={true}
          className='row infinite'
          loader={
            product.pageInfo === undefined ? null : product.pageInfo
                .nextPage === "" ? null : (
              <div
                className='col-12'
                style={{
                  textAlign: "center",
                }}
              >
                <div class='spinner-border' role='status'>
                  <span class='sr-only'>Loading...</span>
                </div>
              </div>
            )
          }
        >
          {product.searchProduct.map((item, index) => {
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
        </InfiniteScroll>
      )}
    </>
  );
};

export default SearchItem;
