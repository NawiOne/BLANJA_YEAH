import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { doTransCreator, clearStatusCreator } from "../../redux/action/product";
import randomInvoice from "crypto-random-string";

import btnClose from "../../assets/image/cross2.png";
import gopay from "../../assets/image/gopay.png";
import posIndo from "../../assets/image/pos-indonesia.png";
import masterCard from "../../assets/image/master-card.png";

const SelectPayment = (props) => {
  const { product, user } = useSelector((state) => state);
  const delivery = 50;
  const invoice = randomInvoice({ length: 6, type: "numeric" });
  const dispatch = useDispatch();

  const [payment, setPayment] = useState("");
  const [disable, setDisable] = useState(true)


  const amount = product.paymentItem.map((item) => {
    return item.price * item.quantity;
  });
  const amountOrder = amount.reduce((total, index) => {
    return total + index;
  }, 0);

  const seller_id = product.paymentItem.map((item) => {
    return item.seller_id;
  });

  const totalAmount = amountOrder + delivery;

  return (
    <div
      class='modal fade '
      id='select-payment'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered '>
        <div class='modal-content modal-payment'>
          <div class='modal-header d-flex'>
            <img src={btnClose} alt='' data-dismiss='modal' />
            <h3
              style={{ fontWeight: "600", marginLeft: "1vw", marginTop: "1vh" }}
            >
              Payment
            </h3>
          </div>
          <div class='modal-body '>
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: "5vh",
                marginLeft: "1vw",
              }}
            >
              Payment method
            </h4>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={gopay} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input
                  type='checkbox'
                  name='select-payment'
                  id=''
                  onClick={() => {
                    setPayment("Gopay");
                    setDisable(!disable)
                  }}
                />
              </div>
            </div>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={posIndo} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input
                  type='checkbox'
                  name='select-payment'
                  id=''
                  onClick={() => {
                    setPayment("Pos Indonesia");
                    setDisable(!disable)
                  }}
                />
              </div>
            </div>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={masterCard} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input
                  type='checkbox'
                  name='select-payment'
                  id=''
                  onClick={() => {
                    setPayment("MasterCard");
                    setDisable(!disable)
                  }}
                />
              </div>
            </div>
            <hr />
            <div className='payment-list-mb-5'>
              <p>Shopping summary</p>
              <div className='row'>
                <div className='col-8 ' style={{ color: "#9B9B9B" }}>
                  Order
                </div>
                <div
                  className='col-4 payment-amount'
                  style={{ fontWeight: "bold" }}
                >
                  $ {amountOrder}
                </div>
              </div>
              <div className='row'>
                <div className='col-8 ' style={{ color: "#9B9B9B" }}>
                  Delivery
                </div>
                <div
                  className='col-4 payment-amount'
                  style={{ fontWeight: "bold" }}
                >
                  $ {delivery}
                </div>
              </div>
            </div>
          </div>

          <div class='modal-footer-payment'>
            <div className='summary'>
              <p
                style={{
                  fontWeight: "600",
                  lineHeight: "16px",
                }}
              >
                Shopping summary
              </p>
              <p
                style={{
                  fontWeight: "600",
                  lineHeight: "16px",
                  color: "#db3022",
                }}
              >
                $ {amountOrder + delivery}
              </p>
            </div>

            <button
              type='button'
              class='btn btn-buy-payment'
              onClick={() => {
                if (payment !== "") {
                  dispatch(
                    doTransCreator(
                      invoice,
                      seller_id.toString(),
                      user.user[0].id_user,
                      "alamat saya",
                      totalAmount,
                      payment,
                      product.dataToTransaction,
                    ),
                  );
                }
              }}
              data-dismiss='modal'
              disabled = {disable}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPayment;
