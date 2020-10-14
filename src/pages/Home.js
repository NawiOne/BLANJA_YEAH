
import React,{useEffect} from 'react';
import {useSelector,useDispatch } from "react-redux";
import "./home.css";
import {getNewProductCreator, getPopularCreator} from '../redux/action/product'
import Navbar from "../component/home/navbar/navbar";
import SidebarMenu from "../component/home/sidebar-menu/sidebar-menu";
import SliderTop from "../component/home/slider-top/sliderTop";
import NewProduct from "../component/home/newProduct/newProduct";
import PopularProduct from "../component/home/popular/popular";
import CategorySlider from '../component/categorySlider';

import "../component/home/category-slider/categorySlider.css";
import {getUserCreator} from '../redux/action/user';



const Home = () => {
 const dispatch = useDispatch();

 const id_login = useSelector((state)=>state.auth.data.id_user)
  
 useEffect(() => {
   dispatch(getNewProductCreator());
   dispatch(getPopularCreator());
   dispatch(getUserCreator(id_login));
 }, [])

  return (
    <>
      <div>
        <div>
          <Navbar />
          <SidebarMenu />
        </div>
      </div>
      <div className='content'>
        <div className='row section-top-slider'>
          <div className='col-md-12'>
            <SliderTop />
          </div>
        </div>
        <div className='row section-category-slider'>
          <div className='col-md-3 category-description'>
            <div className='category-title'>
              <h2 className='section-title'>Category</h2>
              <p className='title-description'>
                What are you currently looking for
              </p>
            </div>
          </div>
          <div className='col-md-9 category-slider'>
            <CategorySlider />
          </div>
        </div>
        <div className='row section-new-product'>
          <NewProduct />
        </div>
        <div className='row section-popular-product'>
          <PopularProduct />
        </div>
      </div>
    </>
  );
};
export default Home;
