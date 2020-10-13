import React from 'react';
import {Link} from 'react-router-dom';

const CustommerLink =()=> {
  return (
    <div className='custommerLink'>
      <Link to='/' style={{textDecoration:'none'}} className='textLink'><i className="material-icons iconAccount">person</i>My account</Link>
      <Link to='/' style={{textDecoration:'none'}} className='textLink'><i className="material-icons iconAddress">place</i>Shipping Address</Link>
      <Link to='/' style={{textDecoration:'none'}} className='textLink'><i className="material-icons iconOrder">content_paste</i>My order</Link>
    </div>
  )
}

export default CustommerLink
