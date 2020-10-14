import React from 'react';
import ModalAddNewAddress from './ModalAddNewAddress';

const ShippingAddress =()=>{
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
      <div className='addressWrapper'> 
        <h5 className='titleAddress'>Address Jane</h5>
        <p className='address'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
        <h5 className='changeAddress'>Change Address</h5>
      </div>
    </div>
  )
}

export default ShippingAddress
