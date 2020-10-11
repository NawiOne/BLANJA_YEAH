import React from 'react'
import Navbar from '../component/home/navbar/navbar';
import ProfileList from '../component/profile/ProfileList';
import ProfileDetails from '../component/profile/profileDetailes/ProfileDetailes';

const Profile = ()=> {
  return (
    <div className='profile'>
      <Navbar/>
      {/* <div className='profileContent'>
        <ProfileList/>
        <ProfileDetails/>
      </div> */}
      <div className='container'>
        <div className='row no-gutters'>
          <div className='col col-md-3 col-lg-3'><ProfileList/></div>
          <div className='col col-md-9 col-lg-9 profileDetail'><ProfileDetails/></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
