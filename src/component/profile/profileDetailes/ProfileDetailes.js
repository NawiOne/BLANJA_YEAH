import React from 'react';
import EditAccount from './EditAccount';
import ShippingAddress from './ShippingAddress';
import MyOrder from './MyOrder';
import MyAccount from './MyAccount';
import EditAccountStore from './EditAccountStore';
import MyAccountStore from './MyAccountStore';
import MyProductStore from './MyProductStore';
import SellingProducts from './SellingProducts';

const ProfileDetailes =({data})=> {
  
  let detail;
  if(data[0].isEditProfile){
    detail = <EditAccount/>
  }
  else if(data[0].isMyAccount){
    detail=<MyAccount data={data}/>
  }
  else if(data[0].isAddres){
    detail=<ShippingAddress/>
  }
  else if(data[0].isMyOrder){
    detail=<MyOrder/>
  }
  else if(data[0].isEditAccountStore){
    detail=<EditAccountStore/>
  }
  else if(data[0].isMyAccountStore){
    detail=<MyAccountStore/>
  }
  else if(data[0].isMyProductStore){
    detail=<MyProductStore/>
  }
  else{
    detail=<SellingProducts/>
  }
  return (
    <div className='profileDetail'>
      {detail}
    </div>
  )
}

export default ProfileDetailes;
