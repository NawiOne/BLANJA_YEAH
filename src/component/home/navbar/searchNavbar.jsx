import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuCreator } from "../../../redux/action/animate";
import {
  searchCreator,
  getSearchKeyCreator,
} from "../../../redux/action/product";

import "./navbar.css";
import bagLogo from "../../../assets/image/logo-blanja.png";
import searchLogo from "../../../assets/image/glass.png";
import filterLogo from "../../../assets/image/filter.png";
import trolly from "..//../../assets/image/basket.png";
import hambMenu from "../../../assets/image/hamb-menu.png";
import mail from "../../../assets/image/mail.png";
import notif from "../../../assets/image/notif.png";
import cross from "../../../assets/image/cross.png";
import emptyNotif from "../../../assets/image/no-notif.png";
import { urlImage } from "../../../utils/http";
import { getUserCreator } from "../../../redux/action/user";

const popover = (
  <Popover id='popover-basic' style={{ width: "20vw" }}>
    <Popover.Content>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          height: "50vh",
          alignItems: "center",
        }}
      >
        <img src={emptyNotif} alt='' style={{ height: "40%", width: "50%" }} />
      </div>
    </Popover.Content>
  </Popover>
);

const SearchNavbar = (props) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [filter, setFilter] = useState("ASC");

  const { animate, product } = useSelector((state) => state);
  const id_user = useSelector((state) => state.auth.data.id_user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCreator(id_user));
  }, []);

  const user = useSelector((state) => state.user.user);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }
    dispatch(searchCreator(e.target.value, filter));
    dispatch(getSearchKeyCreator(e.target.value, filter));
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
                    if (event.key === "Enter") handleSearch(event);
                  }}
                />
                <img src={searchLogo} alt='' />
              </div>
            </form>
            <div
              className='filter'
              data-toggle='modal'
              data-target='#filter-search'
            >
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
              <OverlayTrigger
                trigger='click'
                placement='bottom'
                overlay={popover}
              >
                <img src={notif} className='navbar-icon' alt=''></img>
              </OverlayTrigger>
              <Link to='/chat'>
                <img src={mail} className='navbar-icon' alt='' />
              </Link>
              <Link to='/profile'>
                <img
                  src={urlImage + user[0].image}
                  alt=''
                  className='user-pic'
                />
              </Link>
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

      <div
        className='modal fade modal-filter rounded'
        id='filter-search'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Filter by price
              </h5>
            </div>
            <div className='modal-body'>
              <form>
                <label className='mr-sm-2 sr-only' for='inlineFormCustomSelect'>
                  Preference
                </label>
                <select
                  className='custom-select mr-sm-2'
                  id='inlineFormCustomSelect'
                  onChange={(event) => {
                    setFilter(event.target.value);
                  }}
                >
                  <option disabled>Choose...</option>
                  <option value='ASC'>cheap to expensive</option>
                  <option value='DESC'>expensive to cheap</option>
                </select>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn'
                data-dismiss='modal'
                style={{ background: "#DB3022", color: "white" }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchNavbar;
