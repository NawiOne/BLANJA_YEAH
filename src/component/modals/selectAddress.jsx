import React from "react";
import { useSelector } from "react-redux";

import btnClose from "../../assets/image/cross2.png";

const SelectAddress = () => {
  const { user } = useSelector((state) => state);

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
              data-target='#addNewAddressModal'
              data-dismiss='modal'
            >
              <p>Add new address</p>
            </div>
            <div className='change-address'>
              <p>{user.user[0].username}</p>
              <p>{user.user[0].address}</p>
              <button className='btn-change-address'>Change address</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
