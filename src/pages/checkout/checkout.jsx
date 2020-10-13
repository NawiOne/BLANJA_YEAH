import React from "react";
import "./checkout.css";

import Navbar from "../../component/home/navbar/navbar";
import Sidebar from "../../component/home/sidebar-menu/sidebar-menu";
import SelectAddress from "../../component/modals/selectAddress";
import SelectPayment from "../../component/modals/selectPayment";
import NewAddress from "../../component/modals/addAddress";

import kaos from "../../assets/image/kaos.jpg";

const Checkout = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div className='section-checkout'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 style={{ fontWeight: "bold", marginBottom: "5vh" }}>
                Checkout
              </h2>
              <p>Shipping Adress</p>
              <div className='row'>
                <div className='col-12 mb-4'>
                  <div class='card address-checkout'>
                    <div class='card-body'>
                      <p style={{ fontWeight: "bold" }}>Andrea Jane</p>
                      <p>
                        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                        Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                        blok c 16] Sokaraja, Kab. Banyumas, 53181
                      </p>
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
              <div className='row'>
                <div className='col-12 mb-4'>
                  <div class='card product-checkout'>
                    <div class='card-body item-checkout'>
                      <div style={{ display: "flex" }}>
                        <img
                          src='https://s2.bukalapak.com/img/2013996922/w-1000/baju_muslim_keren_kaos_kurta__busana_muslim_hijrah_bajukoko_.jpg'
                          alt=''
                          className='img-item-checkout'
                        />
                        <div className='product-checkout-name'>
                          <p>Men's formal suit - Black</p>
                          <p style={{ color: "#9B9B9B", fontSize: "small" }}>
                            Zalora Cloth
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", width: "500px" }}>
                        <p style={{ fontWeight: "bold" }}>$ 100.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <p style={{ fontWeight: "bold" }}>$ 40.0</p>
                      <p style={{ fontWeight: "bold" }}>$ 5.0</p>
                    </div>
                  </div>
                  <hr style={{ marginTop: "-.1px", marginBottom: "20px" }} />
                  <div className='checkout-amount'>
                    <div>
                      <p style={{ fontWeight: "bold" }}>Shopping summary</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold", color: "#DB3022" }}>
                        $ 45.0
                      </p>
                    </div>
                  </div>
                  <button
                    type='button'
                    class='btn btn-select-payment'
                    data-toggle='modal'
                    data-target='#select-payment'
                  >
                    Select payment
                  </button>
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
      </div>
    </>
  );
};

export default Checkout;
