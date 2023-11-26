import { ToastContainer } from "react-toastify";
import AddAddressHook from "../../../CustomHooks/User/AddAddressHook";
const UserAddAddress = () => {
  let  [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick]=AddAddressHook()
  return (
    <div className='user-eddit-address'>
      <h3 className="mb-4">Add New Address</h3>
      <input 
        value={alias}
        onChange={onAliasChange}
        type="text" 
        className='form-control input-style' 
        placeholder='Enter Address (Home)' 
        />
      <input
        value={addressDetails}
        onChange={onAddressDetailsChange} 
        type="text" 
        className='form-control input-style mt-2' 
        placeholder='Address' 
        />
      <input
        value={phone}
        onChange={onPhoneChange} 
        type="number" 
        className='form-control input-style mt-2 mb-3' 
        placeholder='Phone' 
        />
      <button className='btn btn-style' onClick={handleClick}>Save</button>
      <ToastContainer/>
    </div>
  )
}
export default UserAddAddress
