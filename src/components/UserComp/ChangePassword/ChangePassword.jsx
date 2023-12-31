import { ToastContainer } from "react-toastify";
import UserEdditPasswordHook from "../../../CustomHooks/User/UserEdditPasswordHook";
import FormSpinner from "../../Utilities/FormSpinner/FormSpinner";
const ChangePassword = () => {
  let [oldPass,onOldPassChange,newPass,onNewPassChange,newRePass,onNewRePassChange,handleClick,display]=UserEdditPasswordHook()
  return (
    <div className='change-password'>
      <input
        value={oldPass}
        onChange={onOldPassChange}
        className='form-control input-style' 
        type="password" 
        placeholder='Old Password'
        />
      <input
        value={newPass}
        onChange={onNewPassChange} 
        className='form-control mt-2 input-style' 
        type="password" 
        placeholder='New Password'
        />
      <input
        value={newRePass}
        onChange={onNewRePassChange} 
        className='form-control mt-2 mb-3 input-style' 
        type="password" 
        placeholder='Confirm Password'
        />
      <button className='btn btn-style' onClick={handleClick}>Change Password</button>
      <ToastContainer/>
      <FormSpinner displayStyle={display}/>
    </div>
  )
}

export default ChangePassword
