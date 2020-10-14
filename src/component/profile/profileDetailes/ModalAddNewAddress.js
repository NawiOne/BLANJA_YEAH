import React from 'react'

const ModalAddNewAddress =()=> {
  return (
    <div className="modal" id="addNewAddressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className='modal-doalog modalDialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <div className='titleModal'>
              <h5>Add New Address</h5>
            </div>
            <form>
              <div class="form-group">
                <label for="inputAddress" className='labelName'>Save address as (ex : home address, office address)</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Rumah"/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='labelName'>Recipient’s name</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" className='labelName'>Recipient's telephone number</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='labelName'>Address</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" className='labelName'>Postal code</label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='labelName'>City or Subdistrict</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                  <label class="form-check-label labelName" for="invalidCheck2">
                    Make it the primary address
                  </label>
                </div>
              </div>
            </form>
            <div class="buttonModal">
              <button type="button" className="btn btn-cancelModal" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-saveModal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddNewAddress
