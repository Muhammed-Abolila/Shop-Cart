import { useState } from "react";
import { useDispatch } from 'react-redux';
import { DeleteCoupon } from '../../Redux/Actions/CouponActions';
const CouponCardHook = (couponData,reloadAfterDelete,setReloadAfterDelete) => {
    let [showUpdateModal,setShowUpdateModal]=useState(false)
    let dispatch=useDispatch();
     // On Delete Coupon
     const onDeleteCoupone=async()=>{
      await dispatch(DeleteCoupon(couponData._id));
      setReloadAfterDelete(!reloadAfterDelete)
      };
      // On Update Coupon
     const showUpdateModalFunc=async()=>{
      setShowUpdateModal(true)
      }
    // Convert Date from timeStamp to custom date
    const date = new Date(couponData.expire);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    const choosenDate = year + '-' + month + '-' + day;

   return [choosenDate,onDeleteCoupone,showUpdateModalFunc,showUpdateModal,setShowUpdateModal]
}

export default CouponCardHook
