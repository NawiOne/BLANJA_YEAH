import React, { useEffect, useState } from "react";
import "./checkout.css";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../../component/home/navbar/navbar";
import Sidebar from "../../component/home/sidebar-menu/sidebar-menu";
import SelectAddress from "../../component/modals/selectAddress";
import SelectPayment from "../../component/modals/selectPayment";
import NewAddress from "../../component/profile/profileDetailes/ModalAddNewAddress";

import orderSuccess from "../../assets/image/order-success.png";

import {
  cleanPaymentCreator,
  clearStatusCreator,
} from "../../redux/action/product";

const Checkout = (props) => {
  const { product, user } = useSelector((state) => state);
  const address = useSelector((state) => state.address.address);
  console.log(address[0]);
  const dispatch = useDispatch();
  const delivery = 50;
  const [isDisable, setDisable] = useState(false);

  const amount = product.paymentItem.map((item) => {
    return item.price * item.quantity;
  });
  const amountOrder = amount.reduce((total, index) => {
    return total + index;
  }, 0);

  useEffect(() => {
    if (product.isPending) {
      return;
    }
    return function cleanup() {
      dispatch(cleanPaymentCreator());
    };
  }, []);
  useEffect(() => {
    if (product.status === 200) {
      dispatch(clearStatusCreator());
      dispatch(cleanPaymentCreator());
    }
  }, [product.status]);

  useEffect(() => {
    if (!product.paymentItem.length) {
      setDisable(true);
      console.log("kosong");
    }
  }, [product.paymentItem]);
  useEffect(() => {});

  return (
    <>
      <div>
        <div>
          <Navbar history={props.history} />
          <Sidebar history={props.history} />
        </div>
        <div className='section-checkout'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 style={{ fontWeight: "bold", marginBottom: "5vh" }}>
                Checkout
              </h2>
              {product.paymentItem.length ? <p>Shipping Adress</p> : null}
              {product.paymentItem.length ? (
                <div className='row'>
                  <div className='col-12 mb-4'>
                    <div class='card address-checkout'>
                      <div class='card-body'>
                        <p style={{ fontWeight: "bold" }}>
                          {user.user[0].username}
                        </p>
                        {address.length ? (
                          <p>
                            ({address[0].save_address}), {address[0].address},{" "}
                            {address[0].city_or_subdistric},{" "}
                            {address[0].postal_code},{" "}
                            {address[0].telephone_number}
                          </p>
                        ) : null}
                        <button
                          type='button'
                          class='btn btn-another-address'
                          data-toggle='modal'
                          data-target='#select-address'
                        >
                          Choose another address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <img
                    src={orderSuccess}
                    alt=''
                    style={{
                      width: "40%",
                      height: "30vh",
                    }}
                  />
                  <p>Your order is being delivered</p>
                </div>
              )}
              {product.paymentItem.map((item, index) => {
                return (
                  <div className='row' key={index}>
                    <div className='col-12 mb-4'>
                      <div class='card product-checkout'>
                        <div class='card-body item-checkout'>
                          <div style={{ display: "flex" }}>
                            <img
                              src={item.image.split(",")[0]}
                              alt=''
                              className='img-item-checkout'
                            />
                            <div className='product-checkout-name'>
                              <div>{item.name_product}</div>
                              <div
                                style={{ color: "#9B9B9B", fontSize: "small" }}
                              >
                                {item.brand}
                              </div>
                            </div>
                          </div>
                          <div style={{ textAlign: "right", width: "500px" }}>
                            <p style={{ fontWeight: "bold" }}>
                              {new Intl.NumberFormat("USD", {
                                style: "currency",
                                currency: "USD",
                              }).format(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='col-md-4'>
              <div class='card checkout-detail-payment'>
                <div class='card-body'>
                  <p style={{ fontWeight: "bold", marginBottom: "3vh" }}>
                    Shopping summary
                  </p>
                  <div className='checkout-amount'>
                    <div>
                      <p style={{ color: "#9B9B9B" }}>Order</p>
                      <p style={{ color: "#9B9B9B" }}>Delivery</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold" }}>
                        {new Intl.NumberFormat("USD", {
                          style: "currency",
                          currency: "USD",
                        }).format(amountOrder)}
                      </p>
                      <p style={{ fontWeight: "bold" }}>
                        {new Intl.NumberFormat("USD", {
                          style: "currency",
                          currency: "USD",
                        }).format(delivery)}
                      </p>
                    </div>
                  </div>
                  <hr style={{ marginTop: "-.1px", marginBottom: "20px" }} />
                  <div className='checkout-amount'>
                    <div>
                      <p style={{ fontWeight: "bold" }}>Shopping summary</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold", color: "#DB3022" }}>
                      {new Intl.NumberFormat("USD", {
                        style: "currency",
                        currency: "USD",
                      }).format(amountOrder + delivery)}
                      </p>
                    </div>
                  </div>
                  <button
                    type='button'
                    class='btn btn-select-payment'
                    data-toggle='modal'
                    data-target='#select-payment'
                    disabled={isDisable}
                  >
                    Select payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <SelectAddress />
      <SelectPayment />
      <NewAddress />
      {/* end modal */}
    </>
  );
};

export default Checkout;
