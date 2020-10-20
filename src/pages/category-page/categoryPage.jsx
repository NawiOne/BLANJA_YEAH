import React  from "react";
import "./category-page.css";
import Navbar from "../../component/home/navbar/navbar";
import SideBar from "../../component/home/sidebar-menu/sidebar-menu";
import CategoryItem from "../../component/category-page/category";
// import Search from "../../component/modals/search";

const CategoryPage = ({history}) => {

  return (
    <>
    <div>
      <div>
        <Navbar history={history} />
        <SideBar history={history} />
      </div>
      <div className='section-product-category'>
        <div className='row'>
          <CategoryItem />
        </div>
      </div>
    </div>
    </>
  );
};
export default CategoryPage;
