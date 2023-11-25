import { ToastContainer } from "react-toastify";
import UpdateCouponeModalHook from "../../../CustomHooks/CouponHooks/UpdateCouponeModalHook";
const UpdateCouponModal = ({couponData,setShowUpdateModal,reloadAfterUpdate,setReloadAfterUpdate}) => {
  let [couponNameUpdate,OnNameChange,couponExpireUpdate,OnExpireChange,
    couponDiscountUpdate,OnDiscountChange,backFunc,handleClick]=UpdateCouponeModalHook(couponData,setShowUpdateModal,reloadAfterUpdate,setReloadAfterUpdate) 
  return (
    <div className="update-Coupone-modal">
      <div className="modal-box">
          <div className="modal-inputs mb-4">
            <input 
              value={couponNameUpdate}
              onChange={OnNameChange}
              type="text" 
              className="form-control input-style"
              />
            <input 
              value={couponExpireUpdate}
              onChange={OnExpireChange}
              type="text" 
              className="form-control input-style my-3"
              />
            <input
              value={couponDiscountUpdate}
              onChange={OnDiscountChange} 
              type="text" 
              className="form-control input-style"
              />
        </div>
        <div className="btns">
          <button className="btn back-btn" onClick={backFunc}>Back</button>
          <button className="btn btn-style" onClick={handleClick}>Save</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default UpdateCouponModal
