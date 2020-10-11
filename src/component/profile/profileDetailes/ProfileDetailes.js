import React from 'react';
import EditAccount from './EditAccount';
import ShippingAddress from './ShippingAddress';

const ProfileDetailes =()=> {
  return (
    <div>
      <div className='profileDetail'>
        {/* <EditAccount/> */}
        <ShippingAddress/>
      </div>
    </div>
  )
}

export default ProfileDetailes;
