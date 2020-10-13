import React from 'react'
import './Profile.css';
import profilePicture from '../../assets/image/profilePicture.png';
import {Link} from 'react-router-dom';
import CustommerLink from './profileLinks/CustommerLink';

const ProfileList =()=> {
  return (
    <div className='container profileList'>
      <div className='infoUser'>
        <img src={profilePicture} alt ='ProfilePicture' className='profilePicture'/>
        <div>
          <h6 className='profileName'>Johanes Mikael</h6>
          <Link to='/' className='textEdit' style={{textDecoration:'none'}}><i className="material-icons iconEdit">create</i> Ubah profile</Link>
        </div>
      </div>
      <CustommerLink/>
    </div>
  )
}

export default ProfileList
