import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {addAddressCreator} from '../../../redux/action/address'

const ModalAddNewAddress =()=> {
  const dispatch = useDispatch()
  const user =useSelector(state => state.user.user[0])

  const [form, setForm]=useState({
    user_id:user.id_user,
    save_address:null,
    receipt_name:null,
    telephone_number:null,
    address:null,
    postal_code:null,
    city_or_subdistric:null
  })
  console.log(form)
 

  const handleSubmit = ()=>{
    dispatch(addAddressCreator(form.user_id,form.save_address, form.receipt_name, form.telephone_number, form.address, form.postal_code, form.city_or_subdistric))
  }
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
                <input type="text" className="form-control" id="inputAddress" placeholder="Rumah" 
                  onChange={(e)=> setForm({...form, save_address:e.target.value})}/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='labelName'>Recipient’s name</label>
                  <input type="text" class="form-control" id="inputEmail4"  
                      onChange={(e)=> setForm({...form, receipt_name:e.target.value})}/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" className='labelName'>Recipient's telephone number</label>
                  <input type="text" class="form-control" id="inputPassword4" 
                      onChange={(e)=> setForm({...form, telephone_number:e.target.value})}/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">

                  <label for="inputEmail4" className='labelName'>Address</label>
                  <input type="text" class="form-control" id="inputEmail4" 
                      onChange={(e)=> setForm({...form, address:e.target.value})}/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4" className='labelName'>Postal code</label>
                  <input type="text" class="form-control" id="inputPassword4" 
                      onChange={(e)=> setForm({...form, postal_code:e.target.value})}/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4" className='labelName'>City or Subdistrict</label>
                  <input type="text" class="form-control" id="inputEmail4" 
                      onChange={(e)=> setForm({...form, city_or_subdistric:e.target.value})}/>
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
              <button type="button" className="btn btn-saveModal" data-dismiss="modal" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddNewAddress
