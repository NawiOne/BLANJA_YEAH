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
                  <label for="inputRecipient" className='labelName'>Recipient’s name</label>
                  <input type="text" class="form-control" id="inputRecipient"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="phone" className='labelName'>Recipient's telephone number</label>
                  <input type="text" class="form-control" id="phone"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="addres" className='labelName'>Address</label>
                  <input type="text" class="form-control" id="addres"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="postalCode" className='labelName'>Postal code</label>
                  <input type="text" class="form-control" id="postalCode"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="city" className='labelName'>City or Subdistrict</label>
                  <input type="text" class="form-control" id="city"/>
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
