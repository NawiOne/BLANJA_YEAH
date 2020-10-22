import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuCreator } from "../../../redux/action/animate";
import {searchCreator} from '../../../redux/action/product';

import "./navbar.css";
import bagLogo from "../../../assets/image/logo-blanja.png";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";
import trolly from "..//../../assets/image/basket.png";
import hambMenu from "../../../assets/image/hamb-menu.png";
import mail from "../../../assets/image/mail.png";
import notif from "../../../assets/image/notif.png";
import cross from "../../../assets/image/cross.png";
import user from '../../../assets/image/user.png';
import {urlImage} from '../../../utils/http';
import {getUserCreator} from '../../../redux/action/user';

const Navbar = ({handleShow}) => {
  const isLogin = useSelector((state)=>state.auth.isLogin)

  const { animate, product } = useSelector((state) => state);
  const id_user = useSelector((state)=>state.auth.data.id_user);
 

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserCreator(id_user))
  },[])

  const user = useSelector((state)=>state.user.user)
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(e.target.value === ''){
      return;
    }
    handleShow()
    dispatch(searchCreator(e.target.value))
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
          <Link to='/'>
            <div>
              <img src={bagLogo} alt='' className='blanja-logo' />
            </div>
          </Link>
          <div className='form'>
            <form action=''>
              <div className='inputCont'>
                <input
                  type='text'
                  className='input-search'
                  placeholder='Search'
                 onKeyPress={(event) => {
                   if(event.key === 'Enter')
                   handleSearch(event)
                 }}
                />
                <img src={searchLogo} alt='' />
              </div>
            </form>
            <div className='filter' >
              <img src={filterLogo} alt='' />
            </div>
          </div>
        </div>
        <div className='right'>
          {isLogin ? (
            <div className='operation-btn-nav'>
              <div className='trolly'>
                <Link to='/mybag'>
                  <img src={trolly} alt='' className='navbar-icon' />
                </Link>
                {product.bagItem.length === 0 ? null : (
                  <div className='badge-mybag'>
                    <div>{product.bagItem.length}</div>
                  </div>
                )}
              </div>
              <img
                src={notif}
                className='navbar-icon'
                alt=''
                data-toggle='popover'
                data-placement='top'
                data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
              ></img>

                <Link to='/chat'><img src={mail} className='navbar-icon' alt='' /></Link>
                {user === null ?
                  <Link to='/profile'><img src={user} alt='' className='user-pic' /></Link>
                  :
                  <Link to='/profile'><img src={urlImage+user[0].image} alt='' className='user-pic' /></Link>
                } 

            </div>
          ) : (
              <div className='operation-btn-nav-auth'>
                <img src={trolly} alt='' className='trolly' />
                <div className='btn-auth'>
                  <Link to='/auth'>
                  <button type='button' className='btn btn-login'>
                    Login
                  </button>
                  </Link>
                  <Link to='/auth'>
                    <button type='button' className='btn btn-signup'>
                      Signup
                    </button>
                  </Link>
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
