import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { UserUseCoupon, DeleteAllCart } from '../../../Redux/Actions/CartActions';
import Notifications from '../../../CustomHooks/Notifications';
import DeleteModal from '../../Utilities/DeleteModal/DeleteModal';
const Coupon = ({data,reload,setReload}) => {  
  let dispatch=useDispatch()
  let [CouponValue,setCouponValue]=useState(data.coupon);
  let [loading,setLoading]=useState(true);
  let [showDeleteModal,setShowDeleteModal]=useState(false)
  const onCouponChange=(e)=>{
    setCouponValue(e.target.value)
  };
  const OnUserInsertCoupon=async()=>{
    setLoading(true)   
    await dispatch(UserUseCoupon({
      couponName:CouponValue
    }));
    setLoading(false)
    setReload(!reload)
  };
  let CouponResponse=useSelector((state)=>state.CartReducer.UseCoupon);
  let [notify]=Notifications(CouponResponse)
  useEffect(()=>{
    if(loading===false){
      if(CouponResponse.data){
        notify(CouponResponse.data.message)
      }
    }
  },[loading]);
  const onShowDeleteModalFunc=()=>{
    setShowDeleteModal(true)
  };
  const onDeleteAllCart=async()=>{
    await dispatch(DeleteAllCart());
    setReload(!reload)
  }
  return (
    <div className='Coupon'>
      <input 
        value={CouponValue}
        onChange={onCouponChange}
        className="form-control text-center" 
        type="text" 
        placeholder='كود الخصم'/>
      <button className='btn' onClick={OnUserInsertCoupon}>تطبيق</button>
      {data.totalAfterDiscount?(
        <div className='price'><span>{data.totalCartPrice}جنيه</span><br/> بعد الخصم <br/>{data.totalAfterDiscount} جنيه</div>
        ):(
          <div className='price'>{data.totalCartPrice} جنيه</div>
        )}
      
      <Link to="/paymethods">
        <button className='btn'>إتمام الشراء</button>
      </Link>
      <button className='btn-delete' onClick={onShowDeleteModalFunc}>حذف العربه</button>
      {showDeleteModal===true&&<DeleteModal data={data} onDelete={onDeleteAllCart} setShowDeleteModal={setShowDeleteModal}/>}
    </div>
  )
};
export default Coupon;
// uiyiuy  expired
// M_ABOLILA