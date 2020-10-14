import React from 'react';
import {useSelector } from "react-redux";
import EditAccount from './EditAccount';
import ShippingAddress from './ShippingAddress';
import MyOrder from './MyOrder';
import MyAccount from './MyAccount';
import EditAccountStore from './EditAccountStore';
import MyAccountStore from './MyAccountStore';
import MyProductStore from './MyProductStore';
import SellingProducts from './SellingProducts';

const ProfileDetailes =({data})=> {
  
  const level_id = useSelector((state)=>state.auth.data.level_id)

  let detail;
  if(data[0].isEditProfile){
    if(level_id === 1){
      detail=<EditAccountStore/>
    }
    else if(level_id === 2){
      detail = <EditAccount/>
    }
    else{
      return null
    } 
  }
  else if(data[0].isMyAccount){
    if(level_id === 1){
      detail=<MyAccountStore data={data}/>
    }
    else if(level_id === 2){
      detail = <MyAccount data={data}/>
    }
    else{
      return null
    } 
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
