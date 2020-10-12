import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuCreator } from "../../../redux/action/animate";
import "./navbar.css";
import bagLogo from "../../../assets/image/bag.png";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";
import trolly from "..//../../assets/image/basket.png";
import hambMenu from "../../../assets/image/hamb-menu.png";
import mail from "../../../assets/image/mail.png";
import notif from "../../../assets/image/notif.png";
import userPlaceholder from "../../../assets/image/user.jpg";
import cross from "../../../assets/image/cross.png";

const Navbar = () => {
  const [isLogin] = useState(false);
  const { animate } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    console.log("seacrh");
    e.preventDefault();
  };

  return (
    <>
      <div
        className={
          !animate.menuDisplayed
            ? "navbar shadow fixed-top"
            : "navbar fixed-top "
        }
      >
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
                  onClick={(e) => {
                    console.log(e);
                  }}
                />
                <img src={searchLogo} alt='' />
              </div>
            </form>
            <div className='filter'>
              <img src={filterLogo} alt='' />
            </div>
          </div>
        </div>
        <div className='right'>
          {isLogin ? (
            <div className='operation-btn-nav'>
              <img src={trolly} alt='' className='navbar-icon' />
              <img src={notif} className='navbar-icon' alt=''></img>
              <img src={mail} className='navbar-icon' alt=''></img>
              <img src={userPlaceholder} alt='' className='user-pic' />
            </div>
          ) : (
            <div className='operation-btn-nav-auth'>
              <img src={trolly} alt='' className='trolly' />
              <div className='btn-auth'>
                <button type='button' className='btn btn-login'>
                  Login
                </button>
                <button type='button' className='btn btn-signup'>
                  Signup
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          className='humberger-menu'
          onClick={() => {
            dispatch(hideMenuCreator());
          }}
        >
          {animate.menuDisplayed ? (
            <img src={cross} className='humberger' alt='' />
          ) : (
            <img src={hambMenu} className='humberger' alt='' />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
