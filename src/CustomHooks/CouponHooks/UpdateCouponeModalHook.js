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
   // console.log(updateCoupon);
   
   const handleClick=async()=>{
     if(couponNameUpdate==''){
       notify("ادخل اسم الكوبون");
     }else if(couponExpireUpdate==''){
       notify("ادخل تاريخ انتهاء الكوبون");
     }else if(couponDiscountUpdate==''){
       notify("ادخل قيمه الخصم");
     }else if(couponDiscountUpdate<=0){
       notify("ادخل قيمه اكبر من الصفر");
     }else if(couponDiscountUpdate>100){
       notify("ادخل قيمه أقل من 100");
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
         notify("تم تعديل كوبون الخصم");
         setCouponNameUpdate('');
         setCouponExpireUpdate('');
         setCouponDiscountUpdate('');
         setShowUpdateModal(false)
         setReloadAfterUpdate(!reloadAfterUpdate)
       }else if(updateCoupon.status!=200){
         notify(updateCoupon.data.message)
       }
   }
   },[loading]);
   return [couponNameUpdate,OnNameChange,couponExpireUpdate,OnExpireChange,
           couponDiscountUpdate,OnDiscountChange,handleClick]
}

export default UpdateCouponeModalHook
