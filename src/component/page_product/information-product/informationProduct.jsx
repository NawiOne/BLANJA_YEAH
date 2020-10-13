import React from "react";
import "../../../pages/page-product/page-product.css";

import star from "../../../assets/image/Star.png";

const ProductInforamtion = () => {
  return (
    <div className='col-12'>
      <h2 className='product-info-title'>Informasi Produk</h2>
      <div className='product-condition'>
        <h4 style={{ fontWeight: "600" }}>Condition</h4>
        <h4 className='condition-status'>New</h4>
      </div>
      <div className='description-text'>
        <h4 style={{ fontWeight: "600" }}>Description</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sequi nam at reiciendis asperiores nesciunt ex quos magni saepe
          quibusdam tempore, ab aperiam quasi eius. Eum unde ullam, quisquam
          alias libero necessitatibus architecto a accusantium. Cum voluptates
          harum sapiente, minus deserunt vel repellendus quam. Quis eveniet
          nobis esse obcaecati architecto? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ipsa officia corrupti delectus quas
          praesentium veniam cum sapiente deserunt alias voluptatem. Mollitia
          eos veritatis eaque aperiam maiores modi harum soluta quae,
          repellendus voluptas sunt optio sint incidunt consequatur quibusdam
          illum id! Quam mollitia maxime laborum itaque reprehenderit vel
          corrupti architecto at.
        </p>
      </div>
      <div className='product-review'>
        <h2 className='product-review-title'>Product review</h2>
        <div className='row rating-review'>
          <div className='col-12 col-md-6 rating-number'>
            <p>5.0</p>
            <div>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 rating-description'>
            <div className='rating-star-number'>
              <div className='rating-star'>
                <img src={star} alt='' />
              </div>
              <div className='rating-number-right'>1</div>
            </div>
            <div className='rating-progress'></div>
            <div className='rating-number-end'>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInforamtion;
