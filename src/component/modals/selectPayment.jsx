import React from "react";

import btnClose from "../../assets/image/cross2.png";
import gopay from "../../assets/image/gopay.png";
import posIndo from "../../assets/image/pos-indonesia.png";
import masterCard from "../../assets/image/master-card.png";

const selectPayment = () => {
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
            <img src={btnClose} alt='' data-dismiss='modal'/>
            <h3 style={{fontWeight: '600', marginLeft: '1vw', marginTop: '1vh'}}>Payment</h3>
          </div>
          <div class='modal-body '>
              <h5 style={{fontWeight: 'bold', marginBottom: '3vh', marginLeft: '1vw'}}>Payment method</h5>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={gopay} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input type='checkbox' name='select-payment' id='' />
              </div>
            </div>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={posIndo} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input type='checkbox' name='select-payment' id='' />
              </div>
            </div>
            <div className='row payment-list'>
              <div className='col-8 '>
                <img src={masterCard} alt='' />
              </div>
              <div className='col-4 checkbox'>
                <input type='checkbox' name='select-payment' id='' />
              </div>
            </div>
            <hr />
            <div className='payment-list-mb-5'>
              <p>Shopping summary</p>
              <div className='row'>
                <div className='col-8 ' style={{color: '#9B9B9B'}}>Order</div>
                <div className='col-4 payment-amount' style={{fontWeight: 'bold'}}>$ 40.0</div>
              </div>
              <div className='row'>
                <div className='col-8 ' style={{color: '#9B9B9B'}}>Delivery</div>
                <div className='col-4 payment-amount' style={{fontWeight: 'bold'}}>$ 5.0</div>
              </div>
            </div>
          </div>

          <div class='modal-footer-payment'>
            <div className='summary'>
              <p style={{
                  fontWeight: '600',
                  lineHeight: '16px'
              }}>Shopping summary</p>
              <p  style={{
                  fontWeight: '600',
                  lineHeight: '16px',
                  color: '#db3022'
              }}>$ 45.0</p>
            </div>

            <button type='button' class='btn btn-buy-payment'>
             Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default selectPayment;
