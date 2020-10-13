import React from 'react';
import profilePicture from '../../../assets/image/profilePicture.png'

const MyAccount =({data})=> {
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
    <div className='detailWrapper'>
      <h4 className='titleDetail'>My Profile</h4>
      <p className='description'>Manage your profile information</p>
      <div className='row'>
        <div className='col col-md-8'>
          <form>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Name</label>
              <div className="col-sm-7 informationProfile">
                Johanes Mikael
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Email</label>
              <div className="col-sm-7 informationProfile">
                johanes@gmail.com
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Phone Number</label>
              <div className="col-sm-7 informationProfile">
                08901289012
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label-sm labelName">Gender</label>
              <div className="col-sm-7 informationProfile">
                Laki-Laki
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Date of birth</label>
              <div className='col-sm-7 informationProfile'>
                1 Januari 1990
              </div>
            </div>
          </form>
        </div>
        <div className='col col-md-3'>
          <div className='imageUserWrapper'>
            <img src={profilePicture} className='imageUser' alt='profilePicture'/>
            <h6 className='edit' onClick={handleClickEdit}>Edit Profile</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
