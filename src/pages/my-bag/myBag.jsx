import React from "react";
import "./mybag.css";
import { Link } from "react-router-dom";

import Navbar from "../../component/home/navbar/navbar";
import Sidebar from "../../component/home/sidebar-menu/sidebar-menu";

const MyBag = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div className='section-mybag'>
          <div className='row'>
            <div className='col-12'>
              <h2 style={{ fontWeight: "bold", marginBottom: "4vh" }}>
                My bag
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-12 mb-4'>
                  <div className='card select-allitem'>
                    <div className='card-body'>
                      <div className='check-selected'>
                        <div>
                          <input
                            type='checkbox'
                            name='selected'
                            id=''
                            style={{ marginRight: "1.5vw", marginTop: "-3px" }}
                            className='checkbox-selected'
                          />
                        </div>

                        <div style={{ fontWeight: "bold" }}>
                          Select all items{" "}
                          <span style={{ color: "#9B9B9B" }}>
                            (2 item selected)
                          </span>
                        </div>
                      </div>
                      <button className='delete-item'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12' style={{ marginBottom: "1.8vh" }}>
                  <div className='card mybag-item'>
                    <div className='card-body'>
                      <div className='item-bag-name-img'>
                        <input type='checkbox' name='' id='' />
                        <img
                          src='https://ae01.alicdn.com/kf/HTB1vq98hwnH8KJjSspcq6z3QFXaY/Simplee-Embroidery-faux-leather-coat-Motorcycle-zipper-wine-red-leather-jacket-women-Fashion-cool-outerwear-winter.jpg_640x640.jpg'
                          alt=''
                          className='img-item-bag img-fluid'
                        />
                        <div className='mybag-item-name'>
                          <p style={{ fontWeight: "bold" }}>
                            Mens formal suit -Blcak
                          </p>
                          <p style={{ fontSize: "small", color: "#9B9B9B" }}>
                            Zalora Cloth
                          </p>
                        </div>
                      </div>

                      <div className='quantity-handle'>
                        <div className='handle-minus'>-</div>
                        <div>1</div>
                        <div className='handle-plus'>+</div>
                      </div>
                      <div style={{ fontWeight: "bold" }}>$ 20.0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 ' style={{ marginBottom: "1.8vh" }}>
                  <div className='card mybag-item'>
                    <div className='card-body'>
                      <div className='item-bag-name-img'>
                        <input type='checkbox' name='' id='' />
                        <img
                          src='https://ae01.alicdn.com/kf/HTB1vq98hwnH8KJjSspcq6z3QFXaY/Simplee-Embroidery-faux-leather-coat-Motorcycle-zipper-wine-red-leather-jacket-women-Fashion-cool-outerwear-winter.jpg_640x640.jpg'
                          alt=''
                          className='img-item-bag img-fluid'
                        />
                        <div className='mybag-item-name'>
                          <p style={{ fontWeight: "bold" }}>
                            Mens formal suit -Blcak
                          </p>
                          <p style={{ fontSize: "small", color: "#9B9B9B" }}>
                            Zalora Cloth
                          </p>
                        </div>
                      </div>

                      <div className='quantity-handle'>
                        <div className='handle-minus'>-</div>
                        <div>1</div>
                        <div className='handle-plus'>+</div>
                      </div>
                      <div style={{ fontWeight: "bold" }}>$ 20.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card right-section'>
                <div className='card-body'>
                  <h5>Shopping summary</h5>
                  <div className='mybag-total'>
                    <p>Total price</p>
                    <p>$ 40.0</p>
                  </div>
                  <Link to='/checkout'>
                    <button className='btn-buy-mybag'>Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBag;
