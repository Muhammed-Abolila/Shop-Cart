import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AdminUpdateCoupon } from '../../Redux/Actions/CouponActions';
import Notifications from "../../CustomHooks/Notifications";
const UpdateCouponeModalHook = (couponData,setShowUpdateModal,reloadAfterUpdate,setReloadAfterUpdate) => {
    let dispatch=useDispatch()
    const[couponNameUpdate,setCouponNameUpdate]=useState(couponData.name);
    const[couponExpireUpdate,setCouponExpireUpdate]=useState(couponData.expire);
    const[couponDiscountUpdate,setCouponDiscountUpdate]=useState(couponData.discount);
    const[loading,setLoading]=useState(true);
    
   // on coupone Name Change
   const OnNameChange=(e)=>{
     setCouponNameUpdate(e.target.value)
   }
   // on coupone expire Change
   const OnExpireChange=(e)=>{
     setCouponExpireUpdate(e.target.value)
   }
   // on coupone Discount Change
   const OnDiscountChange=(e)=>{
     setCouponDiscountUpdate(e.target.value)
   }
   let updateCoupon=useSelector((state)=>state.CouponReducers.UpdateCoupon);
   let [notify]=Notifications(updateCoupon);
   
   const backFunc=()=>{
    setShowUpdateModal(false)
   }

   const handleClick=async()=>{
     if(couponNameUpdate==''){
       notify("Enter Coupon Name");
     }else if(couponExpireUpdate==''){
       notify("Enter Expire Date");
     }else if(couponDiscountUpdate==''){
       notify("Enter Discount Percentage");
     }else if(couponDiscountUpdate<=0){
       notify("Discount Percentage Must Be Bigger Than 0");
     }else if(couponDiscountUpdate>100){
       notify("Discount Percentage Must Be Less Than 100");
     }else{
       setLoading(true)
       await dispatch(AdminUpdateCoupon(couponData._id,{
         "name": couponNameUpdate,
         "expire": couponExpireUpdate,
         "discount": couponDiscountUpdate
       }));
       setLoading(false)
     }
   };
   useEffect(()=>{
     if(loading==false){
       if(updateCoupon.status==200){
         notify("Done");
         setCouponNameUpdate('');
         setCouponExpireUpdate('');
         setCouponDiscountUpdate('');
         setShowUpdateModal(false)
         setReloadAfterUpdate(!reloadAfterUpdate);
       }else if(updateCoupon.status!=200){
         notify(updateCoupon.data.message)
       }
   }
   },[loading]);
   return [couponNameUpdate,OnNameChange,couponExpireUpdate,OnExpireChange,
           couponDiscountUpdate,OnDiscountChange,backFunc,handleClick]
}

export default UpdateCouponeModalHook
