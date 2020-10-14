import React,{useState} from 'react';
import user from '../../../assets/image/user.png';
import product from '../../../assets/image/package.png';
import basket from '../../../assets/image/cart.png';


const SellerLink =()=> {

  const[select,setSelect]=useState({
    isSelectStore:false,
    isSelectProduct:false,
    isSelectOrder:false,
  });

  const handleClickSelectStore = ()=>{
    setSelect({
      ...select,
      isSelectStore:!select.isSelectStore,
    })
  }

  const handleClickSelectProduct =()=>{
    setSelect({
      ...select,
      isSelectProduct:!select.isSelectProduct
    })
  }

  const handleClickSelectOrder = ()=>{
    setSelect({
      ...select,
      isSelectOrder:!select.isSelectOrder
    })
  }

  return (
    <div className='sellerLink'>
      <div className='linkWrapper'>
        <h6 className='textLink' onClick={handleClickSelectStore}><img src={user} alt='' className='iconAccount'/>My account</h6>
        {select.isSelectStore ?
          <i className="material-icons v">expand_less</i>
          : 
          <i className="material-icons iconArrow">expand_more</i>
        } 
      </div>
      {select.isSelectStore ? <h6 className='selectLink'>Store profile</h6> : null}
      <div className='linkWrapper'>
        <h6 className='textLink' onClick={handleClickSelectProduct}><img src={product} alt='' className='iconAddress'/>Product</h6>
        {select.isSelectProduct ?
          <i className="material-icons v">expand_less</i>
          : 
          <i className="material-icons iconArrow">expand_more</i>
        }
      </div>
      {select.isSelectProduct ?
        <>
          <h6 className='selectLink'>My product</h6>
          <h6 className='selectLink'>Selling product</h6>
        </>
        :
        null
      }
      <div className='linkWrapper'>
        <h6 className='textLink' onClick={handleClickSelectOrder}><img src={basket} alt='' className='iconOrder'/>Order</h6>
        {select.isSelectOrder ?
          <i className="material-icons v">expand_less</i>
          : 
          <i className="material-icons iconArrow">expand_more</i>
        }
      </div>
      {select.isSelectOrder ?
        <>
          <h6 className='selectLink'>My order</h6>
          <h6 className='selectLink'>Order cancel</h6>
        </>
        :
        null
      }
    </div>
  )
}

export default SellerLink
