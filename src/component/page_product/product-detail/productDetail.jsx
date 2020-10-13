import React from "react";
import "./product-detail.css";

import s1 from "../../../assets/image/shoe1.png";
import s2 from "../../../assets/image/shoe2.png";
import s3 from "../../../assets/image/shoe3.png";
import s4 from "../../../assets/image/shoe4.png";
import star from "../../../assets/image/Star.png";

const ProductDetail = () => {
  return (
    <>
      <div className='col-md-5'>
        <div className='row'>
          <div className='col-6 product-img-detail '>
            <div class='card card-img-detail shadow'>
              <img src={s1} alt='' className='img-detail img-fluid' />
            </div>
          </div>
          <div className='col-6'>
            <div class='card card-img-detail shadow'>
              <img
                src='http://www.kingsdownroots.co.uk/wp-content/uploads/2017/11/Y3-Adidas-The-Shoe-Surgeon.jpg'
                alt=''
                className='img-detail img-fluid'
              />
            </div>
          </div>
          <div className='col-6'>
            <div class='card card-img-detail shadow'>
              <img src={s3} alt='' className='img-detail img-fluid' />
            </div>
          </div>
          <div className='col-6'>
            <div class='card card-img-detail shadow'>
              <img src={s4} alt='' className='img-detail img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-7 mt-2 pl-4'>
        <div>
          <h2>Nike CruzrOne (Bright Crimson)</h2>
          <p>Nike</p>
          <div>
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
          </div>
          <div className='product-price-detail'>
            <p>Price</p>
            <h2>$ 20.0</h2>
          </div>
          <div className='color-pallet-select'>
            <p>Color</p>
            <div className='color-pallets'>
              <button className='pallet '>
                <div className='pallet-black'></div>
              </button>
              <button className='pallet'>
                <div className='pallet-red'></div>
              </button>
              <button className='pallet'>
                <div className='pallet-blue'></div>
              </button>
              <button className='pallet'>
                <div className='pallet-green'></div>
              </button>
            </div>
          </div>
          <div className='size-quantity'>
            <div className='size'>
              <p>Size</p>
              <div className='handle-size'>
                <div className='btn-minus '>-</div>
                <p>28</p>
                <div className='btn-plus '>+</div>
              </div>
            </div>
            <div className='quantity'>
              <p>Jumlah</p>
              <div className='handle-size'>
                <div className='btn-minus '>-</div>
                <p>28</p>
                <div className='btn-plus '>+</div>
              </div>
            </div>
          </div>
          <div className='chat-addbag-btn'>
            <button type='button' class='btn btn-chat'>
              Chat
            </button>
            <button type='button' class='btn btn-add-bag'>
              Add bag
            </button>
          </div>
          <button type='button' class='btn btn-buy'>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
