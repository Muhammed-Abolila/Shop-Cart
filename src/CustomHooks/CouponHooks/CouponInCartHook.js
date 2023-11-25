import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserUseCoupon, DeleteAllCart } from '../../Redux/Actions/CartActions';
import Notifications from '../Notifications';
const CouponInCartHook = (data,reload,setReload) => {
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
    return [CouponValue,onCouponChange,OnUserInsertCoupon,onShowDeleteModalFunc,showDeleteModal,onDeleteAllCart,setShowDeleteModal]
}

export default CouponInCartHook
