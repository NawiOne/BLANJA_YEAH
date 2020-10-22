import React from 'react';
import { useSelector } from 'react-redux'

const MyProductStore =()=> {

  const sellerProduct = useSelector((state)=>state.product.sellerProduct[0])
  console.log(sellerProduct)
  return (
    <div className='detailWrapper'>
      <h4 className='titleDetail'>My order</h4>
      <div className='subTitleWrapperStore'>
        <p className='subTitleStore'>All items</p>
        <p className='subTitleStore'>Sould out</p>
        <p className='subTitleStore'>Archived</p>
      </div>
      <div className='searchWrapper'>
        <i className="material-icons iconSearch">search</i>
        <input className='form-control-sm no-border inputSearch' placeholder='Search'/>
      </div>
      <div className='table'>
        <div className='headerTable'>
          <div className='row'>
            <div className='col-sm-3'>
              <select class="custom-select custom-select-sm no-border textHeaderTable">
                <option selected>Product name</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='col-sm-5'></div>
            <div className='col-sm-2'>
              <select class="custom-select custom-select-sm no-border textHeaderTable">
                <option selected>Price</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='col-sm-2'>
              <select class="custom-select custom-select-sm no-border textHeaderTable">
                <option selected>Stock</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default MyProductStore
