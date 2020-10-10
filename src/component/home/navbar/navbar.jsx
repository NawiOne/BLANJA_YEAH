import React from "react";
import "./navbar.css";
import bagLogo from "../../../assets/image/bag.png";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";
import trolly from "..//../../assets/image/basket.png";
import hambMenu from '../../../assets/image/hamb-menu.png'

const Navbar = () => {
  return (
    <div className='navbar shadow'>
      <div className='left'>
        <div className='logo'>
          <img src={bagLogo} alt='' className='blanja-logo' />
          <p className='blanja'>Blanja</p>
        </div>
        <div className='form'>
          <form action=''>
            <div className='inputCont'>
              <input
                type='text'
                className='input-search'
                placeholder='Search'
              />
              <img src={searchLogo} alt='' />
            </div>
          </form>
          <div className='filter'>
            <img src={filterLogo} alt='' />
          </div>
        </div>
      </div>
      <div>
        <img src={hambMenu} alt="" className='humberger' />
      </div>
      <div className='right'>
        <img src={trolly} alt='' className='trolly' />
        <button type='button' className='btn btn-login'>
          Login
        </button>
        <button type='button' className='btn btn-signup'>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
