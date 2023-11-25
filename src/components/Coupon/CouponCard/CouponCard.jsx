import DeleteBtn from "../../Utilities/DeleteBtn/DeleteBtn";
import { FaRegEdit } from "react-icons/fa";
import UpdateCouponModal from "../UpdateCouponModal/UpdateCouponModal";
import CouponCardHook from "../../../CustomHooks/CouponHooks/CouponCardHook";
const CouponCard = ({couponData,reloadAfterDelete,setReloadAfterDelete,reloadAfterUpdate,setReloadAfterUpdate}) => {
  let [choosenDate,onDeleteCoupone,showUpdateModalFunc,showUpdateModal,
      setShowUpdateModal]=CouponCardHook(couponData,reloadAfterDelete,setReloadAfterDelete)
  return (
    <div className="copoun-card">
      <div className="card-body">
          <div className="info">
            <div className="coup-name d-flex">
                <h4 className="pe-2">Coupon Name:- </h4>
                <p>{couponData.name}</p>
            </div>
            <div className="coup-date d-flex">
                <h4 className="pe-2">Expire Date:- </h4>
                <p>{choosenDate}</p>
            </div>
            <div className="coup-disc d-flex">
                <h4 className="pe-2">Discount Percentage:- </h4>
                <p>{couponData.discount}%</p>
            </div>
          </div>
          <div className="eddit-delete-icons">
            <DeleteBtn data={couponData} onDelete={onDeleteCoupone}/>
            <span onClick={showUpdateModalFunc} className="eddit-icon"><FaRegEdit/></span>
            {showUpdateModal==true?(
            <UpdateCouponModal 
              couponData={couponData}
              reloadAfterUpdate={reloadAfterUpdate}
              setReloadAfterUpdate={setReloadAfterUpdate}
              setShowUpdateModal={setShowUpdateModal}/>):null}
          </div>
      </div>
    </div>
  )
}

export default CouponCard
