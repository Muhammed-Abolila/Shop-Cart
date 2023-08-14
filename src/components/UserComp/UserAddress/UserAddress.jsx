import React from 'react'
import { Link } from 'react-router-dom';

const UserAddress = () => {
  return (
    <div className='user-address'>
      <div className="address-head">
          <h4>المنزل</h4>
          <div className="btns">
            <Link to="/user/eddit-address" style={{textDecoration:"none"}}>
              <button className='btn'>تعديل</button>
            </Link>
            <button className='btn'>إزاله</button>
          </div>
        </div>
        <div className="address">
          <h5>العنوان:- </h5>
          <p>15 شارع محمد محمود الدقي</p>
        </div>
        <div className="phone">
          <h5>الهاتف:- </h5>
          <p>01234567890</p>
          <p>01234567890</p>
        </div>
    </div>
  )
}

export default UserAddress;
