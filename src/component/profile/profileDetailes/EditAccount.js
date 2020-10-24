import React,{useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {urlImage} from '../../../utils/http';
import {updateCustommerCreator,getUserCreator} from '../../../redux/action/user';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const EditAccount =()=> {

  const user = useSelector((state)=>state.user.user[0])

  const date = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const month =['Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const year = ()=>{
    const results =[]
    for(let i=1880;i<2020;i++){
      results.push(i)
    }
    return results
  }

  
  const dispatch = useDispatch();

  const [form,setForm]=useState({
    id_user:user.id_user,
    phone_number:user.phone_number,
    email :user.email,
    username:user.username,
    gender_id:3,
    date:1,
    month:'Januari',
    year:2020,
    image:user.image,
  })
  
  const date_of_birth = `${form.date} ${form.month} ${form.year}`;

  const handleSubmit = ()=>{
    dispatch(updateCustommerCreator(form.id_user,form.phone_number,form.email,form.username
      ,form.gender_id,date_of_birth,form.image));
    dispatch(getUserCreator(user.id_user))
  }

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  return (
    <div className='detailWrapper'>
      <h4 className='titleDetail'>My Profile</h4>
      <p className='description'>Manage your profile information</p>
      <div className='row'>
        <div className='col col-md-8'>
          <form>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control form-control-sm " id="colFormLabel" placeholder={user.username}
                  onChange={(e)=>setForm({...form,username:e.target.value})}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder={user.email} 
                onChange={(e)=>setForm({...form,email:e.target.value})}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Phone Number</label>
              <div className="col-sm-9">
                <input type="text" className="form-control form-control-sm" id="colFormLabel" placeholder={user.phone_number} 
                onChange={(e)=>setForm({...form,phone_number:e.target.value})}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label-sm labelName">Gender</label>
              <div className="col-sm-9">
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"
                  onChange={()=>setForm({...form,gender_id:1})}/>
                  <label className="custom-control-label labelRadio" for="customRadioInline1">Laki-Laki</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"
                  onChange={()=>setForm({...form,gender_id:2})}
                  />
                  <label className="custom-control-label labelRadio" for="customRadioInline2">Perempuan</label>
                </div>
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Date of birth</label>
              <div className="col-sm-9 no-gutters">
                <div className='row'>
                  <div className='col-sm-4'>
                    {/* <input type="number" className="form-control form-control-sm " id="colFormLabel" placeholder='1'></input> */}
                    <select id="inputState" className="form-control labelSelect"
                    onChange={(e)=>setForm({...form,date:e.target.value})}>
                      <option selected>1</option>
                      {date.map(item=>{ return(
                        <option value={item}>{item}</option>
                      )})}
                    </select>
                  </div>
                  <div className='col-sm-4'>
                    <select id="inputState" className="form-control labelSelect"
                    onChange={(e)=>setForm({...form,month:e.target.value})}>
                      <option selected>Januari</option>
                      {month.map(item=>{ return(
                          <option>{item}</option>
                        )})}
                    </select>
                  </div>
                  <div className='col-sm-4'>
                    <select id="inputState" className="form-control labelSelect"
                    onChange={(e)=>setForm({...form,year:e.target.value})}>
                      {year().map(item=>{return(
                        <option>{item}</option>
                      )})}
                      <option selected>2020</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-3'></div>
              <div className="col-sm-8">
                <button type="button" className="btn btn-save" onClick={handleSubmit}>Save</button>
              </div>
            </div>
          </form>
        </div>
        <div className='col col-md-3'>
          <div className='imageUserWrapper'>
            {form.image === user.image ?
              <img src={urlImage+user.image} className='imageUser' alt='profilePicture'/>
              :
              <img src={URL.createObjectURL(form.image)} className='imageUser' alt='profilePicture'/>
            }
            <button type="button" className="btn btn-selectImage" onClick={handleClick}>Select image</button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInput} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image:e.target.files[0]})}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditAccount;
