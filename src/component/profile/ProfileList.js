import React,{useState} from 'react'
import './Profile.css';
import profilePicture from '../../assets/image/profilePicture.png';
import {Link} from 'react-router-dom';
import CustommerLink from './profileLinks/CustommerLink';
import SellerLink from './profileLinks/SellerLink';

const ProfileList =({data})=> {

  const isCustommer =false; // nanti di ganti dari state auth, status login custommer atau seller
  
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
      {isCustommer ?
        <CustommerLink data={data}/>
        :
        <SellerLink data={data}/>
      }
    </div>
  )
}

export default ProfileList
