import React from 'react'
import { Link } from 'react-router-dom'
import PriceComp from '../../Utilities/PriceComp/PriceComp'

const Coupon = () => {
  return (
    <div className='Coupon'>
      <input  className="form-control" type="text" placeholder='كود الخصم'/>
      <button className='btn'>تطبيق</button>
      <PriceComp/>
      <Link to="/paymethods">
        <button className='btn'>إتمام الشراء</button>
      </Link>
    </div>
  )
}

export default Coupon
