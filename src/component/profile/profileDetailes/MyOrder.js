import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



const MyOrder =()=> {

  const dispatch = useDispatch()

  const {historySeller, historyCustomer} =useSelector(state => state.history)
  
  

  return (
    <div className='detailWrapper'>
      <h4 className='titleDetail'>My order</h4>
      <div className='subTitleWrapper'>
        <p className='subTitle'>All items</p>
        <p className='subTitle'>Not yet paid</p>
        <p className='subTitle'>Packed</p>
        <p className='subTitle'>Sent</p>
        <p className='subTitle'>Completed</p>
        <p className='subTitle'>order Cancel</p>
      </div>
      {historySeller.length === 0?
        historyCustomer.map((item)=>{
          return(
            <div className='row'>
             <div className='col-12 ' style={{ marginBottom: "1.8vh", marginTop:"3vh" }}>
                      <div className='card mybag-item'>
                        <div className='card-body'>
                          <div className='item-bag-name-img'>
                            <img
                              src={item.image.split(",")[0]}
                              alt=''
                              className='img-item-bag img-fluid'
                            />
                            <div className='mybag-item-name'>
                              <p style={{ fontWeight: "bold" }}>
                                {item.name_product}
                              </p>
                              <p
                                style={{ fontSize: "small", color: "#9B9B9B" }}
                              >
                                {item.brand}
                              </p>
                            </div>
                          </div>
                          <div style={{ fontWeight: "bold" }}>
                            {item.qty} /pcs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          )
          }):historySeller.map((item)=>{
            return(
              <div className='row'>
               <div className='col-12 ' style={{ marginBottom: "1.8vh", marginTop:"3vh" }}>
                        <div className='card mybag-item'>
                          <div className='card-body'>
                            <div className='item-bag-name-img'>
                              <img
                                src={item.image.split(",")[0]}
                                alt=''
                                className='img-item-bag img-fluid'
                              />
                              <div className='mybag-item-name'>
                                <p style={{ fontWeight: "bold" }}>
                                  {item.name_product}
                                </p>
                                <p
                                  style={{ fontSize: "small", color: "#9B9B9B" }}
                                >
                                  {item.brand}
                                </p>
                              </div>
                            </div>
                            <div style={{ fontWeight: "bold" }}>
                              {item.qty} /pcs
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            )
            })
      }
      
    </div>
  )
}

export default MyOrder
