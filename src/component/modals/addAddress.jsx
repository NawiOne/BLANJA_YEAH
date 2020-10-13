import React from "react";
import btnClose from "../../assets/image/cross2.png";

const AddAddress = () => {
  return (
    <div
      class='modal fade mt-5'
      id='new-address'
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
          <div class='modal-body modal-addAddress'>
            <h2>Add new address</h2>
            <div style={{ width: "100%" }}>
              <div class='form-group'>
                <label for='address'>
                  Save address as (ex : home address, office address)
                </label>
                <input
                  type='email'
                  class='form-control'
                  id='address'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div class='form-group'>
                    <label for='receipt'>Recipient’s name</label>
                    <input
                      type='email'
                      class='form-control'
                      id='receipt'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <div class='form-group'>
                    <label for='phone'>Recipient's telephone number</label>
                    <input
                      type='email'
                      class='form-control'
                      id='phone'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div class='form-group'>
                    <label for='receipt-address'>Address</label>
                    <input
                      type='email'
                      class='form-control'
                      id='receipt-address'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <div class='form-group'>
                    <label for='postal'>Postal code</label>
                    <input
                      type='email'
                      class='form-control'
                      id='postal'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div class='form-group'>
                    <label for='city'>City or Subdistrict</label>
                    <input
                      type='email'
                      class='form-control'
                      id='city'
                      aria-describedby='emailHelp'
                    />
                  </div>
                </div>
                <div className='col-6'></div>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='inlineCheckbox1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineCheckbox1'>
                  Make it the primary address
                </label>
              </div>
              <div className='row d-flex justify-content-end'>
                <div className='col-6'></div>
                <div className='col-6 d-flex justify-content-end'>
                  <button type='button' class='btn btn-primary '>
                    Primary
                  </button>
                  <button type='button' class='btn btn-secondary'>
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
