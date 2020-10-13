import React from 'react'

const SellerLink =()=> {
  return (
    <div className='sellerLink'>
      <div className='linkWrapper'>
        <h6 className='textLink'><i className="material-icons iconAccount">person_outline</i>My account</h6>
        <i className="material-icons iconArrow">expand_more</i>
        {/* <i className="material-icons v">expand_less</i> */}
      </div>
      <h6 className='selectLink'>Store profile</h6>
      <div className='linkWrapper'>
        <h6 className='textLink'><i className="material-icons iconAddress">place</i>Shipping Address</h6>
        <i className="material-icons iconArrow">expand_more</i>
        {/* <i className="material-icons iconArrow">expand_less</i> */}
      </div>
      <h6 className='selectLink'>My product</h6>
      <h6 className='selectLink'>Selling product</h6>
      <div className='linkWrapper'>
        <h6 className='textLink'><i className="material-icons iconOrder">content_paste</i>My order</h6>
        <i className="material-icons iconArrow">expand_more</i>
        {/* <i className="material-icons iconArrow">expand_less</i> */}
      </div>
      <h6 className='selectLink'>My order</h6>
      <h6 className='selectLink'>Order cancel</h6>
    </div>
  )
}

export default SellerLink
