import React from 'react';
import profilePicture from '../../../assets/image/profilePicture.png'

const EditAccount =()=> {

  const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const month =['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  return (
    <div>
      <div className='container editAccount'>
        <div>
          <h4>My Profile</h4>
          <p>Manage your profile information</p>
        </div>
        <div className='row'>
          <div className='col col-md-9'>
            <form>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label">Name</label>
                <div className="col-sm-8">
                  <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="col-form-label-sm"></input>
                </div>
              </div>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label">Email</label>
                <div className="col-sm-8">
                  <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="col-form-label-sm"></input>
                </div>
              </div>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label">Phone Number</label>
                <div className="col-sm-8">
                  <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder="col-form-label-sm"></input>
                </div>
              </div>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label-sm">Gender</label>
                <div className="col-sm-8">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                    <label className="custom-control-label" for="customRadioInline1">Laki-Laki</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                    <label className="custom-control-label" for="customRadioInline2">Perempuan</label>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label">Date of birth</label>
                <div className="col-sm-8 no-gutters">
                  <div className='row'>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control">
                        {date.map(item=>{ return(
                          <option>{item}</option>
                        )})}
                      </select>
                    </div>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control">
                        {month.map(item=>{ return(
                            <option>{item}</option>
                          )})}
                      </select>
                    </div>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
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
            <img src={profilePicture} className='imageUser' alt='profilePicture'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAccount;
