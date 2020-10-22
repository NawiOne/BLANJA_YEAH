import React, { useEffect, useState } from "react";
import "./product-detail.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToBagCreator,
  checkAlreadyCreator,
  addToPaymentCreator,
  addDataTransCreator,
} from "../../../redux/action/product";

import star from "../../../assets/image/Star.png";

const ProductDetail = () => {
  const { product } = useSelector((state) => state);
  const productDetail = product.detailProduct;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1)
  const [price, setPrice ]= useState(0)
  const amount = price * qty

  const [size, setsize] = useState(25)
  const [color, setColor] = useState('Black')


  useEffect(() => {
    if (product.isPending) {
      return;
    } else {
      dispatch(checkAlreadyCreator(productDetail[0].id));
      setPrice(productDetail[0].price)
    }
  }, [product.isPending, productDetail, dispatch]);


  return (
    <>
      {product.isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='col-md-5'>
            <div className='row'>
              <div className='col-6 product-img-detail '>
                <div class='card card-img-detail shadow'>
                  <img
                    src={productDetail[0].image.split(",")[0]}
                    alt=''
                    className='img-detail img-fluid'
                  />
                </div>
              </div>
              <div className='col-6'>
                <div class='card card-img-detail shadow'>
                  <img
                    src={productDetail[0].image.split(",")[1]}
                    alt=''
                    className='img-detail img-fluid'
                  />
                </div>
              </div>
              <div className='col-6'>
                <div class='card card-img-detail shadow'>
                  <img
                    src={productDetail[0].image.split(",")[2]}
                    alt=''
                    className='img-detail img-fluid'
                  />
                </div>
              </div>
              <div className='col-6'>
                <div class='card card-img-detail shadow'>
                  <img
                    src={productDetail[0].image.split(",")[3]}
                    alt=''
                    className='img-detail img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-7 mt-2 pl-4'>
            <div>
              <h2>{productDetail[0].name_product}</h2>
              <p>{productDetail[0].brand}</p>
              <div>
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
                <img src={star} alt='' />
              </div>
              <div className='product-price-detail'>
                <p>Price</p>
                <h2>{new Intl.NumberFormat("USD", {
                        style: "currency",
                        currency: "USD",
                      }).format(productDetail[0].price)}</h2>
              </div>
              <div className='color-pallet-select'>
                <p>Color</p>
                <div className='color-pallets'>
                  <button className='pallet ' onClick={() => {
                    setColor('Black')
                  }}>
                    <div className='pallet-black'></div>
                  </button>
                  <button className='pallet' onClick={() => {
                    setColor('Red')
                  }}>
                    <div className='pallet-red'></div>
                  </button>
                  <button className='pallet' onClick={() => {
                    setColor('Blue')
                  }}>
                    <div className='pallet-blue'></div>
                  </button>
                  <button className='pallet' onClick={() => {
                    setColor('Green')
                  }}>
                    <div className='pallet-green'></div>
                  </button>
                </div>
              </div>
              <div className='size-quantity'>
                <div className='size'>
                  <p>Size</p>
                  <div className='handle-size'>
                    <div className='btn-minus ' onClick={() => {
                      if(size > 1){
                        setsize(size-1)
                      }
                    }}>-</div>
                    <p>{size}</p>
                    <div className='btn-plus ' onClick={() => {
                      setsize(size+1)
                    }}>+</div>
                  </div>
                </div>
                <div className='quantity'>
                  <p>Jumlah</p>
                  <div className='handle-size'>
                    <div className='btn-minus ' onClick={() => {
                      if(qty > 1){
                        setQty(qty-1)
                      }
                    }}>-</div>
                    <p>{qty}</p>
                    <div className='btn-plus ' onClick={() => {
                      setQty(qty+1)
                    }}>+</div>
                  </div>
                </div>
              </div>
              <div className='chat-addbag-btn'>
                <button type='button' class='btn btn-chat'>
                  Chat
                </button>
                {product.bagAlreadyExist ? (
                  <>
                    <button type='button' class='btn btn-add-bag' disabled>
                      Add bag
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type='button'
                      class='btn btn-add-bag'
                      onClick={() => {
                        dispatch(
                          addToBagCreator(
                            productDetail[0].id,
                            productDetail[0].image.split(",")[0],
                            productDetail[0].name_product,
                            productDetail[0].brand,
                            productDetail[0].price,
                            qty,
                            size,
                            color,
                            productDetail[0].seller_id,
                          ),
                        );
                        dispatch(checkAlreadyCreator(productDetail[0].id));

                      }}
                    >
                      Add bag
                    </button>
                  </>
                )}
              </div>
              <Link to='/checkout'>
                <button
                  type='button'
                  class='btn btn-buy'
                  onClick={() => {
                    dispatch(
                      addToPaymentCreator(
                        productDetail[0].id,
                        productDetail[0].image.split(",")[0],
                        productDetail[0].name_product,
                        productDetail[0].brand,
                        productDetail[0].price,
                        amount,
                        qty,
                        size,
                        color,
                        productDetail[0].seller_id,
                      ),
                    );
                    dispatch(addDataTransCreator(
                      productDetail[0].id,
                      color,
                      size,
                      qty,
                    ))
                  }}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
