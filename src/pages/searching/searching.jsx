import React from 'react';
import {searchCreator} from '../../redux/action/product';
import {useDispatch, useSelector} from 'react-redux';

import Navbar from '../../component/home/navbar/searchNavbar';
import SideBar from '../../component/home/sidebar-menu/searchSidebar';
import SearchItem from '../../component/searchItem';

const SearchPage = (props) => {
    return (
        <>
        <div>
          <div>
            <Navbar />
            <SideBar />
          </div>
          <div className='section-product-category'>
            <div className='row'>
              <SearchItem props={props}/>
            </div>
          </div>
        </div>
        </>
    )
}

export default SearchPage;