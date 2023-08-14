import React from 'react'
import img1 from "../../../assets/image/product/thumb-01.jpg";
import UserSingleOrder from '../UserSingleOrder/UserSingleOrder';

const UserAllOrders = () => {
  return (
    <div className="user-orders-comp">
      <div className="user-order-head">
        <h4>الطلب رقم #21562456</h4>
      </div>
      <div className="user-order-body">
          <UserSingleOrder img={img1}/>
          <UserSingleOrder img={img1}/>
          <UserSingleOrder img={img1}/>
      </div>
      <div className="user-order-footer">
          <div className="status">
            <h4>الحاله <span>قيد التنفيذ</span></h4>
          </div>
          <div className="price">
            <h4>4000جنيه</h4>
          </div>
      </div>
    </div>
  )
}

export default UserAllOrders 
