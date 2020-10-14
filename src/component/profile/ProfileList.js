import React,{useState} from 'react';
import {useSelector } from "react-redux";
import './Profile.css';
import profilePicture from '../../assets/image/profilePicture.png';
import {Link} from 'react-router-dom';
import CustommerLink from './profileLinks/CustommerLink';
import SellerLink from './profileLinks/SellerLink';

const ProfileList =({data})=> {

  const level_id = useSelector((state)=>state.auth.data.level_id)
  console.log(typeof (level_id===1))
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
  return (
    <div className='container profileList'>
      <div className='infoUser'>
        <img src={profilePicture} alt ='ProfilePicture' className='profilePicture'/>
        <div>
          <h6 className='profileName'>Johanes Mikael</h6>
          <p className='textEdit' onClick={handleClickEdit}><i className="material-icons iconEdit">create</i> Ubah profile</p>
        </div>
      </div>
      {list}
    </div>
  )
}

export default ProfileList
