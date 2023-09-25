import  { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdminCreateCoupon, GetAllCoupons } from '../../Redux/Actions/CouponActions';
import Notifications from '../../CustomHooks/Notifications';
const AddCouponHook = () => {
    let dispatch=useDispatch()
    let dateRef=useRef()
    let [couponName,setCouponName]=useState('');
    let [couponDate,setCouponDate]=useState('');
    let [couponDiscount,setCouponDiscount]=useState('');
    let [loading,setLoading]=useState(true);
    let [reloadAfterDelete,setReloadAfterDelete]=useState(false);
    let [reloadAfterUpdate,setReloadAfterUpdate]=useState(false);
    const onCouponNameChange=(e)=>{
      setCouponName(e.target.value)
    };
    const onCouponDateChange=(e)=>{
      setCouponDate(e.target.value)
    };
    const onCouponDiscountChange=(e)=>{
      setCouponDiscount(e.target.value)
    }; 
    //Notifications
    let response=useSelector((state)=>state.CouponReducers.CreateCoupon);
      let [notify]=Notifications(response) 
    // Get Current Date
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    const currentDate = year + '-' + month + '-' + day;
    // Handle Click And Send Data
    const handleClick=async()=>{
      if(couponName==''){
        notify("ادخل اسم الكوبون");
      }else if(couponDate==''){
        notify("ادخل تاريخ انتهاء الكوبون");
      }else if(couponDate<currentDate){
        notify("ادخل تاريخ صالح");
      }else if(couponDiscount==''){
        notify("ادخل قيمه الخصم");
      }else if(couponDiscount<=0){
        notify("ادخل قيمه موجبه");
      }else if(couponDiscount>100){
        notify("ادخل قيمه أقل من 100");
      }else{
        setLoading(true)
        await dispatch(AdminCreateCoupon({
              "name": couponName,
              "expire": couponDate,
              "discount": couponDiscount
            }));
            setLoading(false)
            setCouponName('');
            setCouponDate('');
            setCouponDiscount('');
      }
    };
    useEffect(()=>{
      if(loading==false){
        if(response.status==400){
          notify("يوجد كوبون بنفس الاسم ادخل اسم جديد");
        }
      }
    },[loading])
    // Get All coupons Data
    useEffect(() => {
       dispatch(GetAllCoupons())
    }, [loading,reloadAfterDelete,reloadAfterUpdate]);
    let AllCoupons=useSelector((state)=>state.CouponReducers.AllCoupons);
    let AllCouponsData;
    try{
        if(AllCoupons.data){
            AllCouponsData=AllCoupons.data;
        }else{
            AllCouponsData=[];
        }
    }catch(e){}

    return [couponName,onCouponNameChange,couponDate,onCouponDateChange,dateRef,couponDiscount,
        onCouponDiscountChange,AllCouponsData,reloadAfterDelete,setReloadAfterDelete,
        reloadAfterUpdate,setReloadAfterUpdate,handleClick]
    
}

export default AddCouponHook
