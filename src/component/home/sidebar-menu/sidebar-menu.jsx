import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";

const SidebarMenu = () => {
  const [isLogin] = useState(false);
  const { animate } = useSelector((state) => state);
  console.log(animate);

  return (
    <div
      className={!animate.menuDisplayed ? "sidebar" : "sidebar-on shadow-sm"}
    >
      <div className='form-sidebar'>
        <form action=''>
          <div className='input-sidebar'>
            <input
              type='text'
              className='search-sidebar'
              placeholder='Search'
            />
            <img src={searchLogo} alt='' />
          </div>
        </form>
        <div className='filter'>
          <img src={filterLogo} alt='' />
        </div>
      </div>
      {isLogin ? null : (
        <div className='sidebar-btn-auth'>
          <button type='button' class='btn btn-sidebar-login btn-lg btn-block'>
            Login
          </button>
          <button type='button' class='btn btn-sidebar-signup btn-lg btn-block'>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};
export default SidebarMenu;
