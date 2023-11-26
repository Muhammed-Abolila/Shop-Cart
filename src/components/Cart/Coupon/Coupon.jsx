import { Link } from 'react-router-dom'
import DeleteModal from '../../Utilities/DeleteModal/DeleteModal';
import CouponInCartHook from '../../../CustomHooks/CouponHooks/CouponInCartHook';
const Coupon = ({data,reload,setReload}) => {  
  let [CouponValue,onCouponChange,OnUserInsertCoupon,onShowDeleteModalFunc,showDeleteModal,onDeleteAllCart,setShowDeleteModal]=CouponInCartHook(data,reload,setReload)
  return (
    <div className='Coupon'>
      <input 
        value={CouponValue}
        onChange={onCouponChange}
        className="form-control text-center" 
        type="text" 
        placeholder='COUPON'/>
      <button className='btn btn-style' onClick={OnUserInsertCoupon}>Apply</button>
      {data.totalAfterDiscount?(
        <div className='price'><span>{data.totalCartPrice}EGP</span><br/>After Discount<br/>{data.totalAfterDiscount} EGP</div>
        ):(
          <div className='price'>{data.totalCartPrice} EGP</div>
        )}
      
      <Link to="/paymethods">
        <button className='btn btn-style'>Complete</button>
      </Link>
      <button className='btn-delete' onClick={onShowDeleteModalFunc}>Delete Cart</button>
      {showDeleteModal===true&&<DeleteModal text="Cart" data={data} onDelete={onDeleteAllCart} setShowDeleteModal={setShowDeleteModal}/>}
    </div>
  )
};
export default Coupon;