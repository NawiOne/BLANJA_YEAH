import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {clearSearchCreator, getDetailCreator} from '../../redux/action/product';
import './search.css'

import star from "../../assets/image/Star.png";

const Search = ({ show, handleClose }) => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();

  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className='search-modal'
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title className='modal-search-title'>
            Search Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-search-body'>
          <div className='row'>
            {product.isPending ? (
              <p>loading</p>
            ) : product.searchProduct.length ? (
              product.searchProduct.map((item, index) => {
                return (
                  <div className='col-md-3 item-new-product' key={index} onClick={() => {
                      dispatch(getDetailCreator(item.id))
                      handleClose()
                  }}>
                    <Link
                      to='/product'
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className='card card-item-new shadow'>
                        <img src={item.image.split(',')[0]} alt='...' 
                        className='card-img-top img-new-product img-fluid'/>
                        <div className='card-body card-body-new-product'>
                          <p className='new-product-name'>
                            {item.name_product}
                          </p>
                          <div className='new-product-description'>
                            <p className='product-price'>
                              $ {item.price}
                            </p>
                            <p className='product-store'>
                              {item.brand}
                            </p>
                            <div className='product-rating'>
                              <div>
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                                <img src={star} alt='' />
                              </div>
                              <div className='qty-rating'>(10)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className='empty-search'>
               <h3 className='ops'>OOPS...</h3>
               <p className='not-found'>No product found</p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer style={{border: 'none'}}>
          <Button
            style={{ background: "#DB3022", outline: "none", border: "none" }}
            onClick={() => {
                handleClose()
                dispatch(clearSearchCreator())
            }}
          >
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Search;
