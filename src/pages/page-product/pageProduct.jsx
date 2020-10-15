import React, {useState} from "react";
import "./page-product.css";
import Navbar from "../../component/home/navbar/navbar";
import SidebarMenu from "../../component/home/sidebar-menu/sidebar-menu";
import ProductDetail from "../../component/page_product/product-detail/productDetail";
import ProductInformation from '../../component/page_product/information-product/informationProduct';
import RecomendedProduct from '../../component/page_product/recomended-product/recomended';
import Search from "../../component/modals/search";


const PageProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div>
        <div>
          <Navbar handleShow={handleShow}/>
          <SidebarMenu handleShow={handleShow} />
        </div>
        <div className='content-page-product'>
          <div>
            <p className='url-page'>Home > category > Shoes</p>
          </div>
          <div className='row section-product-detail'>
            <ProductDetail />
          </div>
          <div className='row section-product-information'>
            <ProductInformation />
          </div>
          <div className='row section-product-information mt-5'>
           <RecomendedProduct />
          </div>
        </div>
      </div>
      <Search show={show} handleClose={handleClose}/>
    </>
  );
};

export default PageProduct;
