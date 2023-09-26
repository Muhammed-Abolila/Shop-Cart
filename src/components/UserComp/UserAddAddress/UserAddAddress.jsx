import { ToastContainer } from "react-toastify";
import AddAddressHook from "../../../CustomHooks/User/AddAddressHook";
const UserAddAddress = () => {
  let  [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick]=AddAddressHook()
  return (
    <div className='user-eddit-address pt-3 text-start'>
      <input 
        value={alias}
        onChange={onAliasChange}
        type="text" 
        className='form-control input-style' 
        placeholder='أدخل نوع العنوان مثال (المنزل)' 
        />
      <input
        value={addressDetails}
        onChange={onAddressDetailsChange} 
        type="text" 
        className='form-control input-style mt-2' 
        placeholder='العنوان تفصيلي' 
        />
      <input
        value={phone}
        onChange={onPhoneChange} 
        type="number" 
        className='form-control input-style mt-2 mb-3' 
        placeholder='رقم الهاتف' 
        />
      <button className='btn btn-style' onClick={handleClick}>حفظ العنوان </button>
      <ToastContainer/>
    </div>
  )
}

export default UserAddAddress
