import { ToastContainer } from "react-toastify";
import UserEdditProfileHook from "../../../CustomHooks/User/UserEdditProfileHook";
import FormSpinner from "../../Utilities/FormSpinner/FormSpinner";
const UserEdditProfile = ({setShowUpdateModal}) => {
 let [userName,onUserNameChange,userPhone,onUserPhoneChange,userEmail,onUserEmailChange,
  handleClick,backClick,display]=UserEdditProfileHook(setShowUpdateModal)
 return (
    <div className='user-eddit-profile'>
      <div className="user-eddit-content">
        <h3 className="mb-4">Edit Profile</h3>
        <div>
          <input 
            value={userName}
            onChange={onUserNameChange}
            type="text" 
            className='form-control input-style'
            placeholder="User Name"/>
          <input 
            value={userPhone}
            onChange={onUserPhoneChange}
            type="number" 
            className='form-control input-style mt-2 mb-3'
            placeholder="Phone"/>
          <input 
            value={userEmail}
            onChange={onUserEmailChange}
            type="email"
            placeholder="E-mail"
            className='form-control input-style mt-2 mb-3'/>
            <button className='btn btn-style' onClick={backClick}>Back</button>
            <button className='btn btn-style ms-2' onClick={handleClick}>Save</button>
        </div>
      </div>
      <ToastContainer/>
      <FormSpinner displayStyle={display}/>
    </div>
  )
};

export default UserEdditProfile
