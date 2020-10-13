import React from 'react';
import user from '../../../assets/image/user.png';
import map from '../../../assets/image/map-pin.png';
import clipboard from '../../../assets/image/clipboard.png';

const CustommerLink =({data})=> {
  const handleClickMyAccount = ()=>{
    data[1]({
      ...data[0],
      isEditProfile:false,
      isMyAccount:true,
      isAddres :false,
      isMyOrder:false,
      isEditAccountStore:false,
      isMyAccountStore:false,
      isMyProductStore:false,
      isSellingProduct:false,
    })
  }
  const handleClickAddres = ()=>{
    data[1]({
      ...data[0],
      isEditProfile:false,
      isMyAccount:false,
      isAddres :true,
      isMyOrder:false,
      isEditAccountStore:false,
      isMyAccountStore:false,
      isMyProductStore:false,
      isSellingProduct:false,
    })
  }
  const handleClickMyOrder = ()=>{
    data[1]({
      ...data[0],
      isEditProfile:false,
      isMyAccount:false,
      isAddres :false,
      isMyOrder:true,
      isEditAccountStore:false,
      isMyAccountStore:false,
      isMyProductStore:false,
      isSellingProduct:false,
    })
  }
  return (
    <div className='custommerLink'>
      <h6 className='textLink' onClick={handleClickMyAccount}><img src={user} alt='' className='iconAccount'/>My account</h6>
      <h6 className='textLink' onClick={handleClickAddres}><img src={map} alt='' className='iconAddress'/>Shipping Address</h6>
      <h6 className='textLink' onClick={handleClickMyOrder}><img src={clipboard} alt='' className='iconOrder'/>My order</h6>
    </div>
  )
}

export default CustommerLink
