import React from 'react';
import box from '../../../assets/image/box 5.png';

const SellingProducts =()=> {
  return (
    <div>
      <div className='inventory'>
        <h5 className='title'>Inventory</h5>
        <div className='border'/>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Name of goods</label>
          <input type="text" class="form-control col-sm-4" id="formGroupExampleInput" placeholder=""/>
        </div>
      </div>
      <div className='itemDetails'>
        <h5 className='title'>Item details</h5>
        <div className='border'/>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Unit price</label>
          <input type="text" class="form-control col-sm-4" id="formGroupExampleInput" placeholder=""/>
        </div>
        <div class="form-group formGroup">
          <label for="formGroupExampleInput" className='labelName'>Stock</label>
          <input type="text" class="form-control col-sm-4 formInputStock" id="formGroupExampleInput" placeholder="Buah"/>
        </div>
        <div className='form-group selectStock'>
          <div>
            <label className='labelName'>Stock</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline col-sm-2">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
            <label className="custom-control-label labelRadio" for="customRadioInline1">Baru</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline col-sm-2">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
            <label className="custom-control-label labelRadio" for="customRadioInline2">Bekas</label>
          </div>
        </div>
      </div>
      <div className='formUploadPhoto'>
        <h5 className='title'>Photo of goods</h5>
        <div className='border'/>
        <div className='container uploadPhoto'>
          <div className='cardWrapper'>
            <div className='cardImageUtama'><img src={box} alt='' className='boxUtama'/></div>
            <div className='cardImage'><img src={box} alt='' className='box'/></div>
            <div className='cardImage'><img src={box} alt='' className='box'/></div>
            <div className='cardImage'><img src={box} alt='' className='box'/></div>
            <div className='cardImage'><img src={box} alt='' className='box'/></div>
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
              <i className="material-icons">person_outline</i>
              <i className="material-icons">person_outline</i>
              <i className="material-icons">person_outline</i>
            </div>
            <div className='iconText'>
              <i className="material-icons">person_outline</i>
              <i className="material-icons">person_outline</i>
            </div>
          </div>
          <textarea class="form-control" rows="10"></textarea>
        </div>
      </div>
      <button type="button" className="btn btn-jual">Jual</button>
    </div>
  )
}

export default SellingProducts
