import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {urlImage} from '../../../utils/http';

const MyAccountStore =({data})=> {

  const user = useSelector((state)=>state.user.user[0])

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
      <h4 className='titleDetail'>My Profile Store</h4>
      <p className='description'>Manage your profile information</p>
      <div className='row'>
        <div className='col col-md-9'>
          <form>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Store name</label>
              <div className="col-sm-8 informationProfile">
                {user.username}
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Email</label>
              <div className="col-sm-8 informationProfile">
                {user.email}
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Phone Number</label>
              <div className="col-sm-8 informationProfile">
                {user.phone_number}
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label-sm labelName">Store description</label>
              {user.desc_store === null || user.desc_store === '' ?
                <div className="col-sm-8 informationProfile">
                  -
                </div>
                :
                <div className="col-sm-8 informationProfile">
                  {user.desc_store}
                </div>
              }
            </div>
          </form>
        </div>
        <div className='col col-md-3'>
          <div className='imageUserWrapper'>
            <img src={urlImage+user.image} className='imageUser' alt='profilePicture'/>
            <h6 className='edit' onClick={handleClickEdit}>Edit Profile</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountStore
