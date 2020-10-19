import React,{useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {urlImage} from '../../../utils/http';
import {updateSellerCreator,getUserCreator} from '../../../redux/action/user';

const EditAccountStore =()=> {
  const user = useSelector((state)=>state.user.user[0])
  const dispatch = useDispatch();

  const [form,setForm]=useState({
    id_user:user.id_user,
    phone_number:user.phone_number,
    username:user.username,
    email:user.email,
    image:user.image,
    desc_store:user.desc_store,
  })

  const handleSubmit = ()=>{
    dispatch(updateSellerCreator(form.id_user,form.phone_number,form.email,form.username,form.image,form.desc_store));
      dispatch(getUserCreator(user.id_user))
  }

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

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
                <input type="text" className="form-control form-control-sm " id="colFormLabel" placeholder={user.username}
                onChange={(e)=>setForm({...form,username:e.target.value})}/>
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control form-control-sm" id="colFormLabel" placeholder={user.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}/>
              </div>
            </div>
            <div className='form-group row'>
              <label for="colFormLabel" className="col-sm-3 col-form-label col-form-label labelName">Phone Number</label>
              <div className="col-sm-9">
                <input type="text" className="form-control form-control-sm" id="colFormLabel" placeholder={user.phone_number}
                onChange={(e)=>setForm({...form,phone_number:e.target.value})}/>
              </div>
            </div>
            <div className="form-group row">
              <label for="exampleFormControlTextarea1" className='col-sm-3 labelName'>Store description</label>
              <div className="col-sm-9">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={user.desc_store}
                onChange={(e)=>setForm({...form,desc_store:e.target.value})}
                />
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
            <img src={urlImage+user.image} className='imageUser' alt='profilePicture'/>
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

export default EditAccountStore
