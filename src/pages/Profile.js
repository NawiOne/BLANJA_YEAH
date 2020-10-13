import React from 'react'
import Navbar from '../component/home/navbar/navbar';
import ProfileList from '../component/profile/ProfileList';
import ProfileDetails from '../component/profile/profileDetailes/ProfileDetailes';

const Profile = ()=> {
  return (
    <div className='profile'>
      <Navbar/>
      <div>
        <div className='row no-gutters'>
          <div className='col col-md-4 col-lg-4'><ProfileList/></div>
          <div className='col col-md-8 col-lg-8'><ProfileDetails/></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
