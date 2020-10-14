import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import './Profile.css';
import profilePicture from '../../assets/image/profilePicture.png';
import CustommerLink from './profileLinks/CustommerLink';
import SellerLink from './profileLinks/SellerLink';
import {authLogOutCreator} from '../../redux/action/auth';
import {urlImage} from '../../utils/http';

const ProfileList =({data})=> {

  const dispatch = useDispatch();

  const level_id = useSelector((state)=>state.auth.data.level_id);
  const user = useSelector((state)=>state.user.user[0])
  
  let list;
  if(level_id === 1){
    list=<SellerLink data={data}/>
  }
  else if(level_id === 2){
    list=<CustommerLink data={data}/>
  }
  else{
    return null}
  
  const handleClickEdit = ()=>{
    data[1]({
      ...data[0],
      isEditProfile:true,
      isMyAccount:false,
      isAddres :false,
      isMyOrder:false,
      isEditAccountStore:false,
      isMyAccountStore:false,
      isMyProductStore:false,
      isSellingProduct:false,
    })
  }

  const handleButtonLogOut =()=>{
    dispatch(authLogOutCreator());
  }

  return (
    <div className='container profileList'>
      <div className='infoUser'>
        <img src={urlImage+user.image} alt ='ProfilePicture' className='profilePicture'/>
        <div>
          <h6 className='profileName'>{user.username}</h6>
          <p className='textEdit' onClick={handleClickEdit}><i className="material-icons iconEdit">create</i> Ubah profile</p>
        </div>
      </div>
      {list}
      <Link to='/'>
        <button type="button" className="btn btn-signOut" onClick={handleButtonLogOut}>Sign Out</button>
      </Link>
    </div>
  )
}

export default ProfileList
