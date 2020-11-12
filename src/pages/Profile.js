import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/home/navbar/navbar';
import ProfileList from '../component/profile/ProfileList';
import ProfileDetails from '../component/profile/profileDetailes/ProfileDetailes';
import SidebarMenu from '../component/home/sidebar-menu/sidebar-menu';
import Search from '../component/modals/search';
import {getSellerProductCreator} from '../redux/action/product';

const Profile = ({history})=> {

  const user = useSelector((state)=>state.user.user[0])

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getSellerProductCreator(user.id_user,1,10))
  },[])

  return (
    <div className='profile'>
      <Navbar history={history} />
      <SidebarMenu history={history} />
      <div className='content-profile'>
        <div className='row no-gutters'>
          <div className='col col-md-4 col-lg-4'><ProfileList data={[data,setData]}/></div>
          <div className='col col-md-8 col-lg-8'><ProfileDetails data={[data,setData]}/></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
