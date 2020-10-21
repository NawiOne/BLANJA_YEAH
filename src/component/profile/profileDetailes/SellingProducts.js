import React,{useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import box from '../../../assets/image/box 5.png';
import text from '../../../assets/image/font.png';
import bold from '../../../assets/image/bold-text.png';
import italic from '../../../assets/image/italic.png';
import numberList from '../../../assets/image/number-list.png';
import bulletList from '../../../assets/image/bullet-list.png';
import {uploadProductCreator} from '../../../redux/action/product'

const SellingProducts =()=> {

  const user = useSelector((state)=>state.user.user[0])

  const dispatch = useDispatch();

  const [form,setForm]=useState({
    name_product:null,
    price:null,
    stock:null,
    product_condition:null,
    description:null,
    image1:null,
    image2:null,
    image3:null,
    image4:null,
    image5:null,
  })

  console.log(form)
  console.log(user.id_user)

  const hiddenFileInputImage1 = React.useRef(null);
  const hiddenFileInputImage2 = React.useRef(null);
  const hiddenFileInputImage3 = React.useRef(null);
  const hiddenFileInputImage4 = React.useRef(null);
  const hiddenFileInputImage5 = React.useRef(null);
  
  const handleClickImage1 = event => {
    hiddenFileInputImage1.current.click();
  };

  const handleClickImage2 = event => {
    hiddenFileInputImage2.current.click();
  };

  const handleClickImage3 = event => {
    hiddenFileInputImage3.current.click();
  };

  const handleClickImage4 = event => {
    hiddenFileInputImage4.current.click();
  };

  const handleClickImage5 = event => {
    hiddenFileInputImage5.current.click();
  };

  const handleSubmit = ()=>{
    dispatch(uploadProductCreator(user.id_user,form.name_product,form.price,form.stock,form.product_condition,form.description,form.image1,form.image2,form.image3,form.image4,form.image5))
  }

  return (
    <div>
      <div className='inventory'>
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
            <button type='button' className='btn cardImageUtama' onClick={handleClickImage1}><img src={box} alt='' className='boxUtama'/></button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInputImage1} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image1:e.target.files[0]})}
            />
            <button type='button' className='btn cardImage' onClick={handleClickImage2}><img src={box} alt='' className='box'/></button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInputImage2} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image2:e.target.files[0]})}
            />
            <button type='button' className='btn cardImage' onClick={handleClickImage3}><img src={box} alt='' className='box'/></button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInputImage3} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image3:e.target.files[0]})}
            />
            <button type='button' className='btn cardImage' onClick={handleClickImage4}><img src={box} alt='' className='box'/></button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInputImage4} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image4:e.target.files[0]})}
            />
            <button type='button' className='btn cardImage' onClick={handleClickImage5}><img src={box} alt='' className='box'/></button>
            <input type="file" className="form-control form-control-sm" 
            ref={hiddenFileInputImage5} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,image5:e.target.files[0]})}
            />
          </div>
          <label className='labelPhoto'>Foto Utama</label>
          <div className='border'/>
          <button type="button" className="btn btn-upload">Upload foto</button>
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
