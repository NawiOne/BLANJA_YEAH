import React from 'react';
import ModalAddNewAddress from './ModalAddNewAddress';
import { useSelector } from 'react-redux';

const ShippingAddress =()=>{

  const address = useSelector(state => state.address.address)
    if(address.length === 0){
      return (
        
        <div className='detailWrapper'>
        <h4 className='titleDetail'>Choose another address</h4>
        <p className='description'>Manage your shipping address</p>
        <div className='wrapperButton'>
          {/* Button trigger modal */}
          <button type="button" className="btn btn-Address" data-toggle="modal" data-target="#addNewAddressModal">
            Add new address
          </button>
          {/* Modal */}
          <ModalAddNewAddress/>
        </div>
        <div className='addressNull'> 
        <p className='address'>Please Add Your Address</p>
        </div>
      </div>
      )
    }else{
      return(
        <div className='detailWrapper'>
        <h4 className='titleDetail'>Choose another address</h4>
        <p className='description'>Manage your shipping address</p>
        <div className='wrapperButton'>
          {/* Button trigger modal */}
          <button type="button" className="btn btn-Address" data-toggle="modal" data-target="#addNewAddressModal">
            Add new address
          </button>
          {/* Modal */}
          <ModalAddNewAddress/>
        </div>
        <div className='addressWrapper'> 
         <h5 className='titleAddress'>Address {address.receipt_name}</h5>
          <p className='address'>({address.save_address}), {address.address}, {address.city_or_subdistric}, {address.postal_code}, {address.telephone_number}</p>
          <h5 className='changeAddress'>Change Address</h5>
        </div>
      </div>
      )
    }
    
  
}

export default ShippingAddress
