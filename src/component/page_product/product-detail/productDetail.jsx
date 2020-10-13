import React from "react";
import "./product-detail.css";

import s1 from "../../../assets/image/shoe1.png";
import s2 from "../../../assets/image/shoe2.png";
import s3 from "../../../assets/image/shoe3.png";
import s4 from "../../../assets/image/shoe4.png";

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
              <img src={s2} alt='' className='img-detail img-fluid' />
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
      <div className='col-sm-7 mt-2'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At totam
          laboriosam ullam nemo alias doloribus quia dolores dolorum? Vitae
          impedit culpa similique laudantium placeat asperiores corporis enim,
          neque totam accusantium iusto quo consequuntur expedita omnis quam
          doloremque ullam repellendus doloribus?
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
