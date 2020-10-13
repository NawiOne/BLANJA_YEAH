import React from "react";
import "./page-product.css";
import Navbar from "../../component/home/navbar/navbar";
import SidebarMenu from "../../component/home/sidebar-menu/sidebar-menu";
import ProductDetail from "../../component/page_product/product-detail/productDetail";

const PageProduct = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <SidebarMenu />
        </div>
        <div className='content-page-product'>
          <div>
            <p>Home > category > Shoes</p>
          </div>
          <div className='row section-product-detail'>
            <ProductDetail />
          </div>
          <div className='row section-product-information'></div>
        </div>
      </div>
    </>
  );
};

export default PageProduct;
