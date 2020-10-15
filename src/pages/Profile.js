import React,{useState} from 'react'
import Navbar from '../component/home/navbar/navbar';
import ProfileList from '../component/profile/ProfileList';
import ProfileDetails from '../component/profile/profileDetailes/ProfileDetailes';
import SidebarMenu from '../component/home/sidebar-menu/sidebar-menu';
import Search from '../component/modals/search';

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='profile'>
      <Navbar handleShow={handleShow} />
      <SidebarMenu handleShow={handleShow} />
      <div>
        <div className='row no-gutters'>
          <div className='col col-md-4 col-lg-4'><ProfileList data={[data,setData]}/></div>
          <div className='col col-md-8 col-lg-8'><ProfileDetails data={[data,setData]}/></div>
        </div>
      </div>
      <Search show={show} handleClose={handleClose}/>
    </div>
  )
}

export default Profile
