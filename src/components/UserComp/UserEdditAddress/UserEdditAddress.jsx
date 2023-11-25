import { ToastContainer } from "react-toastify";
import UserEdditAddressHook from "../../../CustomHooks/User/UserEdditAddressHook";
const UserEdditAddress = () => {
  let [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick]=UserEdditAddressHook()
  return (
    <div className='user-eddit-address text-start'>
      <input 
        value={alias}
        onChange={onAliasChange}
        type="text" 
        className='form-control input-style w-75' 
        placeholder='Enter Address (Home)' 
        />
      <input
        value={addressDetails}
        onChange={onAddressDetailsChange} 
        type="text" 
        className='form-control input-style mt-2 w-75' 
        placeholder='Address' 
        />
      <input
        value={phone}
        onChange={onPhoneChange} 
        type="number" 
        className='form-control input-style mt-2 mb-3 w-75' 
        placeholder='Phone' 
        />
      <button className='btn btn-style' onClick={handleClick}>Save</button>
      <ToastContainer/>
    </div>
  )
};

export default UserEdditAddress
