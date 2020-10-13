import React from "react";
import btnClose from "../../assets/image/cross2.png";

const selectAddress = () => {
  return (
    <div
      class='modal fade mt-5'
      id='select-address'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered modal-lg'>
        <div class='modal-content '>
          <div class='modal-header-close'>
            <img
              src={btnClose}
              alt=''
              className='btn-close'
              data-dismiss='modal'
            />
          </div>
          <div class='modal-body modal-selectAddress'>
            <h2>Choose another address</h2>
            <div
              className='add-new-address'
              data-toggle='modal'
              data-target='#new-address'
              data-dismiss='modal'
            >
              <p>Add new address</p>
            </div>
            <div className='change-address'>
              <p>Andrea jane</p>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <button className='btn-change-address'>Change address</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default selectAddress;
