import React,{useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import box from '../../../assets/image/box 5.png';
import text from '../../../assets/image/font.png';
import bold from '../../../assets/image/bold-text.png';
import italic from '../../../assets/image/italic.png';
import numberList from '../../../assets/image/number-list.png';
import bulletList from '../../../assets/image/bullet-list.png';
import {uploadProductCreator} from '../../../redux/action/product';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const SellingProducts =()=> {

  const user = useSelector((state)=>state.user.user[0])

  const dispatch = useDispatch();

  const [form,setForm]=useState({
    name_product:null,
    price:null,
    stock:null,
    product_condition:null,
    description:null,
    files:[],
  })

  const hiddenFileInput = React.useRef(null);
  
  const handleClickUpload = event => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = ()=>{
    dispatch(uploadProductCreator(user.id_user,form.name_product,form.price,form.stock,form.product_condition,form.description,form.files[0],form.files[1],form.files[2],form.files[3],form.files[4]));
  }
  
  return (
    <div>
      <div className='inventory'>
        {/* <button onClick={notify}>notify</button> */}
        <h5 className='title'>Inventory</h5>
        <div className='border'/>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Name of goods</label>
          <input type="text" class="form-control col-sm-4" id="formGroupExampleInput" placeholder=""
          onChange={(e)=>setForm({...form,name_product:e.target.value})}/>
        </div>
      </div>
      <div className='itemDetails'>
        <h5 className='title'>Item details</h5>
        <div className='border'/>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Unit price</label>
          <input type="number" class="form-control col-sm-4" id="formGroupExampleInput" placeholder=""
          onChange={(e)=>setForm({...form,price:e.target.value})}/>
        </div>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Stock</label>
          <input type="number" class="form-control col-sm-4 formInputStock" id="formGroupExampleInput" placeholder="Buah"
          onChange={(e)=>setForm({...form,stock:e.target.value})}/>
        </div>
        <div className='form-group selectStock'>
          <div>
            <label className='labelName'>Stock</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline col-sm-2">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"
            onChange={()=>setForm({...form,product_condition:'baru'})}/>
            <label className="custom-control-label labelRadio" for="customRadioInline1">Baru</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline col-sm-2">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"
            onChange={()=>setForm({...form,product_condition:'bekas'})}/>
            <label className="custom-control-label labelRadio" for="customRadioInline2">Bekas</label>
          </div>
        </div>
      </div>
      <div className='formUploadPhoto'>
        <h5 className='title'>Photo of goods</h5>
        <div className='border'/>
        <div className='container uploadPhoto'>
          <div className='cardWrapper'>
            {form.files[0] === undefined ?
              <div className='cardImageUtama'><img src={box} alt='' className='boxUtama'/></div>
              :
              <img src={URL.createObjectURL(form.files[0])} alt='' className='imageUtama'/>
            }
            {form.files[1] === undefined ?
              <div className='cardImage'><img src={box} alt='' className='box'/></div>
              :
              <img src={URL.createObjectURL(form.files[1])} alt='' className='image'/>
            }
            {form.files[2] === undefined ?
              <div className='cardImage'><img src={box} alt='' className='box'/></div>
              :
              <img src={URL.createObjectURL(form.files[2])} alt='' className='image'/>
            }
            {form.files[3] === undefined ?
              <div className='cardImage'><img src={box} alt='' className='box'/></div>
              :
              <img src={URL.createObjectURL(form.files[3])} alt='' className='image'/>
            }
            {form.files[4] === undefined ?
              <div className='cardImage'><img src={box} alt='' className='box'/></div>
              :
              <img src={URL.createObjectURL(form.files[4])} alt='' className='image'/>
            }
          </div>
          <label className='labelPhoto'>Foto Utama</label>
          <div className='border'/>
          <button type="button" className="btn btn-upload" onClick={handleClickUpload}>Upload foto</button>
          <input type="file" multiple className="form-control form-control-sm" 
            ref={hiddenFileInput} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,files:e.target.files})}
          />
        </div>
      </div>
      <div className='descriptionForm'>
        <h5 className='title'>Description</h5>
        <div className='border'/>
        <div className='descriptionInput'>
          <div className='icon'>
            <div className='iconFont'>
              <img src={text} alt='' className='iconEditText'/>
              <img src={bold} alt='' className='iconEditText'/>
              <img src={italic} alt='' className='iconEditText'/>
            </div>
            <div className='iconText'>
              <img src={numberList} alt='' className='iconEditText'/>
              <img src={bulletList} alt='' className='iconEditText'/>
            </div>
          </div>
          <textarea class="form-control" rows="10"
          onChange={(e)=>setForm({...form,description:e.target.value})}/>
        </div>
      </div>
      <button type="button" className="btn btn-jual" onClick={handleSubmit}>Jual</button>
    </div>
  )
}

export default SellingProducts
