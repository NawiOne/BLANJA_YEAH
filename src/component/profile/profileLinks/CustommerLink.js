import React from 'react';

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
      <h6 className='textLink' onClick={handleClickMyAccount}><i className="material-icons iconAccount">person_outline</i>My account</h6>
      <h6 className='textLink' onClick={handleClickAddres}><i className="material-icons iconAddress">place</i>Shipping Address</h6>
      <h6 className='textLink' onClick={handleClickMyOrder}><i className="material-icons iconOrder">content_paste</i>My order</h6>
    </div>
  )
}

export default CustommerLink
