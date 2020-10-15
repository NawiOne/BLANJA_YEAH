import React, {useState} from "react";
import "./mybag.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQtyCreator, minusQtyCreator, addToPaymentCreator, addDataTransCreator } from "../../redux/action/product";

import Navbar from "../../component/home/navbar/navbar";
import Sidebar from "../../component/home/sidebar-menu/sidebar-menu";
import Search from "../../component/modals/search";

const MyBag = () => {
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const price = product.bagItem.map((el) => {
    return el.price * el.quantity;
  });
  const total = price.reduce((total, index) => {
    return total + index;
  }, 0);

  return (
    <>
      <div>
        <div>
          <Navbar handleShow={handleShow} />
          <Sidebar handleShow={handleShow} />
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
                            onClick={() => {
                              console.log('cheked')
                            }}
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
              {product.bagItem.map((item) => {
                return (
                  <div className='row'>
                    <div className='col-12 ' style={{ marginBottom: "1.8vh" }}>
                      <div className='card mybag-item'>
                        <div className='card-body'>
                          <div className='item-bag-name-img'>
                            <input type='checkbox' name='' id='' onClick={() => {
                              dispatch(addToPaymentCreator(
                                item.id,
                                item.image.split(',')[0],
                                item.name_product,
                                item.brand,
                                item.price,
                                total,
                                item.quantity,
                                item.size,
                                item.color,
                                item.seller_id
                              ));
                              dispatch(addDataTransCreator(
                                item.id,
                                item.color,
                                item.size,
                                item.quantity,
                              ))
                            }}
                            />
                            <img
                              src={item.image.split(",")[0]}
                              alt=''
                              className='img-item-bag img-fluid'
                            />
                            <div className='mybag-item-name'>
                              <p style={{ fontWeight: "bold" }}>
                                {item.name_product}
                              </p>
                              <p
                                style={{ fontSize: "small", color: "#9B9B9B" }}
                              >
                                {item.brand}
                              </p>
                            </div>
                          </div>

                          <div className='quantity-handle'>
                            <div
                              className='handle-minus'
                              onClick={() => {
                                dispatch(minusQtyCreator(item.id));
                              }}
                            >
                              -
                            </div>
                            <div>{item.quantity}</div>
                            <div
                              className='handle-plus'
                              onClick={() => {
                                dispatch(addQtyCreator(item.id));
                              }}
                            >
                              +
                            </div>
                          </div>
                          <div style={{ fontWeight: "bold" }}>
                            $ {item.price * item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='col-md-4'>
              <div className='card right-section'>
                <div className='card-body'>
                  <h5>Shopping summary</h5>
                  <div className='mybag-total'>
                    <p>Total price</p>
                    <p style={{fontWeight: 'bold'}}>$ {total}</p>
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
      <Search show={show} handleClose={handleClose}/>
    </>
  );
};
export default MyBag;
