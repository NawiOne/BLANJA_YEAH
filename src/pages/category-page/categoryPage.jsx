import React from "react";
import "./category-page.css";
import Navbar from "../../component/home/navbar/navbar";
import SideBar from "../../component/home/sidebar-menu/sidebar-menu";
import CategoryItem from "../../component/category-page/category";

const CategoryPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <SideBar />
      </div>
      <div className='section-product-category'>
        <div className='row'>
          <CategoryItem />
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
