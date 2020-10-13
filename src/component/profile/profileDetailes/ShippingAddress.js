import React from 'react';

const ShippingAddress =()=>{
  return (
    <div>
      <div className='shippingAddress'>
        <div>
          <h4 className='titleEditAccount'>Choose another address</h4>
          <p className='descriptionEditAccount'>Manage your shipping address</p>
        </div>
        <div className='wrapperButton'>
          <button type="button" className="btn btn-Address">Add new address</button>
        </div>
        <div className='addressWrapper'> 
          <h5 className='titleAddress'>Address Jane</h5>
          <p className='address'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
          <h5 className='changeAddress'>Change Address</h5>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress
