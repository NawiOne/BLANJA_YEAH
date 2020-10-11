import React from 'react';
import profilePicture from '../../../assets/image/profilePicture.png'

const EditAccount =()=> {

  const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const month =['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  return (
    <div>
      <div className='editAccount'>
        <div>
          <h4 className='titleEditAccount'>My Profile</h4>
          <p className='descriptionEditAccount'>Manage your profile information</p>
        </div>
        <div className='row'>
          <div className='col col-md-8'>
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
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label-sm labelName">Gender</label>
                <div className="col-sm-9">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                    <label className="custom-control-label labelRadio" for="customRadioInline1">Laki-Laki</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                    <label className="custom-control-label labelRadio" for="customRadioInline2">Perempuan</label>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Date of birth</label>
                <div className="col-sm-9 no-gutters">
                  <div className='row'>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control labelSelect">
                        {date.map(item=>{ return(
                          <option>{item}</option>
                        )})}
                      </select>
                    </div>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control labelSelect">
                        {month.map(item=>{ return(
                            <option>{item}</option>
                          )})}
                      </select>
                    </div>
                    <div className='col-sm-4'>
                      <select id="inputState" className="form-control labelSelect">
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
            <div className='imageUserWrapper'>
              <img src={profilePicture} className='imageUser' alt='profilePicture'/>
              <button type="button" className="btn btn-selectImage">Select image</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAccount;
