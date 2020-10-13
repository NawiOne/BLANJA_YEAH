import React,{useState} from 'react'
import Navbar from '../component/home/navbar/navbar';
import Sidbar from '../component/home/sidebar-menu/sidebar-menu';
import ProfileList from '../component/profile/ProfileList';
import ProfileDetails from '../component/profile/profileDetailes/ProfileDetailes';

const Profile = ()=> {
  const[data,setData]=useState({
    isEditProfile:false,
    isMyAccount:true,
    isAddres :false,
    isMyOrder:false,
    isEditAccountStore:false,
    isMyAccountStore:false,
    isMyProductStore:false,
    isSellingProduct:false,
  })


  return (
    <div className='profile'>
      <Navbar/>
      <Sidbar/>
      <div>
        <div className='row no-gutters'>
          <div className='col col-md-4 col-lg-4'><ProfileList data={[data,setData]}/></div>
          <div className='col col-md-8 col-lg-8'><ProfileDetails data={[data,setData]}/></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
