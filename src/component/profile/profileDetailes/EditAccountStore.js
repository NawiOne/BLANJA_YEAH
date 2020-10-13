import React from 'react';
import profilePicture from '../../../assets/image/profilePicture.png'

const EditAccountStore =()=> {
  return (
    <div className='detailWrapper'>
      <h4 className='titleDetail'>My Profile Store</h4>
      <p className='description'>Manage your profile information</p>
      <div className='row'>
        <div className='col col-md-9'>
          <form>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Name</label>
              <div className="col-sm-9">
                <input type="email" className="form-control form-control-sm " id="colFormLabel" placeholder="Johanes Mikael"></input>
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="johanes@gmail.com"></input>
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Phone Number</label>
              <div className="col-sm-9">
                <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="08901289012"></input>
              </div>
            </div>
            <div className="form-group row">
              <label for="exampleFormControlTextarea1" className='col-sm-3 labelName'>Store description</label>
              <div className="col-sm-9">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-3'></div>
              <div className="col-sm-8">
                <button type="button" className="btn btn-save">Save</button>
              </div>
            </div>
          </form>
        </div>
        <div className='col col-md-3'>
          <div className='imageUserWrapper'>
            <img src={profilePicture} className='imageUser' alt='profilePicture'/>
            <button type="button" className="btn btn-selectImage">Select image</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAccountStore
