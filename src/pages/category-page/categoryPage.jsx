import React, {useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./category-page.css";
import Navbar from "../../component/home/navbar/navbar";
import SideBar from "../../component/home/sidebar-menu/sidebar-menu";
import CategoryItem from "../../component/category-page/category";
import Search from "../../component/modals/search";


const CategoryPage = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(2)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <div>
        <Navbar handleShow={handleShow}/>
        <SideBar handleShow={handleShow}/>
      </div>
      <div className='section-product-category'>
        <div className='row'>
          <CategoryItem />
        </div>
      </div>
    </div>
    <Search show={show} handleClose={handleClose}/>
    </>
  );
};
export default CategoryPage;
