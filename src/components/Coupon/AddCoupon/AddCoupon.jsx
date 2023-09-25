import  { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import CouponCard from '../CouponCard/CouponCard';
import AddCouponHook from '../../../CustomHooks/CouponHooks/AddCouponHook';
const AddCoupon = () => {
  let [couponName,onCouponNameChange,couponDate,onCouponDateChange,dateRef,couponDiscount,
    onCouponDiscountChange,AllCouponsData,reloadAfterDelete,setReloadAfterDelete,
    reloadAfterUpdate,setReloadAfterUpdate,handleClick]=AddCouponHook()
  return (
      <div className="inputs mt-3">
          <input
            value={couponName}
            onChange={onCouponNameChange} 
            className="form-control input-style" 
            type="text" 
            placeholder=' اسم الكوبون' />
          <input
            value={couponDate}
            onChange={onCouponDateChange}
            ref={dateRef}
            onFocus={()=>dateRef.current.type="date"}
            onBlur={()=>dateRef.current.type="text"}
            className="form-control input-style my-3" 
            type="text" 
            placeholder='تاريخ الإنتهاء' />
          <input
            value={couponDiscount}
            onChange={onCouponDiscountChange}  
            className="form-control input-style" 
            type="number" 
            placeholder='قيمه الخصم' />
        <button className='btn' onClick={handleClick}>حفظ</button> 
        {AllCouponsData?(
              AllCouponsData.map((couponData,index)=>
              <CouponCard
                key={index} 
                couponData={couponData}
                reloadAfterDelete={reloadAfterDelete}
                setReloadAfterDelete={setReloadAfterDelete}
                reloadAfterUpdate={reloadAfterUpdate}
                setReloadAfterUpdate={setReloadAfterUpdate}
               />)
         ):null}
        <ToastContainer />
      </div>
  )
};
export default AddCoupon;